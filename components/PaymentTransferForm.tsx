"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { createTransfer } from "@/lib/actions/dwolla.actions";
import { createTransaction } from "@/lib/actions/transaction.action";
import { getBank, getBankByAccountId } from "@/lib/actions/user.actions";
import { decryptId } from "@/lib/utils";

import { BankDropdown } from "./BankDropdown";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import TransferSuccess from "./TransferSuccess";
import LoadingScreen from "./LoadingScreen";

const STORAGE_KEY = "bankease-transfer-draft";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(4, "Transfer note is too short"),
  amount: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount like 5.00"),
  senderBank: z.string().min(4, "Please select a valid bank account"),
  sharableId: z.string().min(8, "Please select a valid sharable Id"),
});

const PaymentTransferForm = ({ accounts }: PaymentTransferFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{ amount: string; email: string } | null>(null);
  const [draftRestored, setDraftRestored] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: "",
      senderBank: "",
      sharableId: "",
    },
  });

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as z.infer<typeof formSchema>;
        form.reset(parsed);
        setDraftRestored(true);
        return;
      } catch {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    }

    if (accounts[0]?.appwriteItemId) {
      form.setValue("senderBank", accounts[0].appwriteItemId);
    }
  }, [form, accounts]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const clearDraft = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    form.reset();
    setDraftRestored(false);
  };

  const submit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);

    try {
      const receiverAccountId = decryptId(data.sharableId.trim());
      const receiverBank = await getBankByAccountId({
        accountId: receiverAccountId,
      });
      const senderBank = await getBank({ documentId: data.senderBank });

      if (!senderBank) {
        setError("Source bank account not found. Please select a valid bank.");
        return;
      }

      if (!receiverBank) {
        setError(
          "Recipient bank not found. Open My Banks on the recipient's account, copy their Shareable ID, and paste it here."
        );
        return;
      }

      if (senderBank.$id === receiverBank.$id) {
        setError(
          "You cannot transfer to the same bank account. Sign in as a different user, link a bank, and use the other user's Shareable ID."
        );
        return;
      }

      if (!senderBank.fundingSourceUrl || !receiverBank.fundingSourceUrl) {
        setError("One of the banks is missing a Dwolla funding source. Re-link the bank and try again.");
        return;
      }

      const transferParams = {
        sourceFundingSourceUrl: senderBank.fundingSourceUrl,
        destinationFundingSourceUrl: receiverBank.fundingSourceUrl,
        amount: data.amount,
      };
      const transfer = await createTransfer(transferParams);

      if (transfer && typeof transfer === "object" && "error" in transfer) {
        setError(transfer.error);
        return;
      }

      if (transfer) {
        const transaction = {
          name: data.name,
          amount: Number(data.amount).toFixed(2),
          senderId: senderBank.userId,
          senderBankId: senderBank.$id,
          receiverId: receiverBank.userId,
          receiverBankId: receiverBank.$id,
          email: data.email,
        };

        const newTransaction = await createTransaction(transaction);

        if (newTransaction) {
          sessionStorage.removeItem(STORAGE_KEY);
          setSuccess({
            amount: data.amount,
            email: data.email,
          });
        } else {
          setError("Transfer sent but failed to save the transaction record.");
        }
      } else {
        setError("Transfer failed. Please verify the details and try again.");
      }
    } catch (error) {
      console.error("Submitting create transfer request failed: ", error);
      setError("Something went wrong while processing the transfer. Check the shareable ID and amount.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <LoadingScreen
        title="Sending your transfer"
        message="Please wait while we process your payment..."
        fullScreen={false}
      />
    );
  }

  if (success) {
    return (
      <TransferSuccess
        amount={success.amount}
        recipientEmail={success.email}
        onSendAnother={() => {
          setSuccess(null);
          clearDraft();
        }}
      />
    );
  }

  const senderBank = form.watch("senderBank");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="glass-card mt-6 flex flex-col p-6 sm:p-8">
        {draftRestored && (
          <p className="mb-4 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-13 text-green-800">
            Your previous form entries were restored.{" "}
            <button
              type="button"
              className="font-semibold underline"
              onClick={clearDraft}
            >
              Clear form
            </button>
          </p>
        )}

        {error && (
          <p className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-14 text-red-600">
            {error}
          </p>
        )}

        <FormField
          control={form.control}
          name="senderBank"
          render={() => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                  <FormLabel className="text-14 font-medium text-gray-700">
                    Select Source Bank
                  </FormLabel>
                  <FormDescription className="text-12 font-normal text-gray-600">
                    Your bank — the account money will be sent from
                  </FormDescription>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <BankDropdown
                      accounts={accounts}
                      setValue={form.setValue}
                      value={senderBank}
                      otherStyles="!w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                  <FormLabel className="text-14 font-medium text-gray-700">
                    Transfer Note (Optional)
                  </FormLabel>
                  <FormDescription className="text-12 font-normal text-gray-600">
                    Please provide any additional information or instructions
                    related to the transfer
                  </FormDescription>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Textarea
                      placeholder="Write a short note here"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <div className="payment-transfer_form-details">
          <h2 className="text-18 font-semibold text-gray-900">
            Recipient details
          </h2>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item py-5">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Recipient&apos;s Email Address
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="ex: johndoe@gmail.com"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sharableId"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-5 pt-6">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Recipient&apos;s Shareable ID
                </FormLabel>
                <div className="mb-2">
                  <Link
                    href="/my-banks"
                    className="text-13 font-medium text-blue-600 hover:underline"
                  >
                    Copy from My Banks
                  </Link>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="Paste the Shareable ID here"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="border-y border-gray-200">
              <div className="payment-transfer_form-item py-5">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Amount
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="ex: 5.00"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <div className="payment-transfer_btn-box">
          <Button type="submit" className="payment-transfer_btn">
            Transfer Funds
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PaymentTransferForm;
