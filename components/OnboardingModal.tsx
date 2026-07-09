"use client";

import Image from "next/image";
import {
  ArrowRightLeft,
  Banknote,
  CheckCircle2,
  Copy,
  Landmark,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type OnboardingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
  userName?: string;
};

const steps = [
  {
    icon: Landmark,
    title: "Connect a demo bank",
    color: "bg-blue-100 text-blue-700",
    items: [
      "Click Connect bank and choose First Platypus Bank.",
      "Use any username/password (e.g. user_good / pass_good).",
      "On the phone/OTP screen, leave fields empty and press Submit or Continue.",
      "Wait on the loading screen — your dashboard opens automatically.",
    ],
  },
  {
    icon: Users,
    title: "Test a transfer (2 users required)",
    color: "bg-violet-100 text-violet-700",
    items: [
      "User A: sign up, connect a bank, open My Banks, copy Shareable ID below the card.",
      "User B: sign up with a different email and connect another bank.",
      "As User B, go to Transfer Funds, select your bank, paste User A's Shareable ID.",
    ],
  },
  {
    icon: Copy,
    title: "Shareable ID",
    color: "bg-amber-100 text-amber-700",
    items: [
      "Find it on My Banks under each bank card — click Copy ID.",
      "Send it to anyone who needs to pay you.",
      "Payment transfer forms save your entries if you visit My Banks and come back.",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Transfer status",
    color: "bg-green-100 text-green-700",
    items: [
      "Successful transfers show as Processing in history.",
      "Status changes to Success after about 4 business days.",
    ],
  },
];

const OnboardingModal = ({
  open,
  onOpenChange,
  onContinue,
  userName,
}: OnboardingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-xl overflow-hidden rounded-2xl border-0 p-0 shadow-elevated">
        <div className="bg-brand-gradient px-6 pb-8 pt-6 text-white">
          <DialogHeader className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <Image src="/icons/logo.svg" alt="BankEase" width={36} height={36} />
              <span className="font-ibm-plex-serif text-xl font-bold">BankEase</span>
            </div>
            <DialogTitle className="text-2xl font-semibold text-white">
              Welcome{userName ? `, ${userName}` : ""}!
            </DialogTitle>
            <DialogDescription className="text-blue-100">
              Your account is ready. Here&apos;s everything you need to explore the demo
              without getting stuck.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="custom-scrollbar max-h-[50vh] space-y-4 overflow-y-auto px-6 py-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-xl border border-gray-100 bg-gray-50/80 p-4"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full ${step.color}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-15 font-semibold text-gray-900">{step.title}</h3>
                </div>
                <ul className="space-y-2 pl-1">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-13 leading-relaxed text-gray-700"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="flex items-start gap-3 rounded-xl border border-dashed border-gray-300 bg-white p-4">
            <Banknote className="mt-0.5 size-5 shrink-0 text-gray-500" />
            <p className="text-12 text-gray-600">
              This app uses Plaid and Dwolla sandboxes — no real money moves. Use demo
              credentials only.
            </p>
          </div>
        </div>

        <div className="border-t bg-white px-6 py-4">
          <Button
            className="h-12 w-full rounded-xl bg-brand-gradient text-base font-semibold shadow-md hover:opacity-95"
            onClick={onContinue}
          >
            Got it — connect my bank
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
