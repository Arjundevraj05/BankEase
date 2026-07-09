"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

type TransferSuccessProps = {
  amount: string;
  recipientEmail: string;
  onSendAnother?: () => void;
};

const TransferSuccess = ({
  amount,
  recipientEmail,
  onSendAnother,
}: TransferSuccessProps) => {
  return (
    <div className="glass-card flex flex-col items-center gap-6 px-8 py-10 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-emerald-100">
        <CheckCircle2 className="size-10 text-success-600" />
      </div>
      <div className="space-y-2">
        <h2 className="text-24 font-poppins font-semibold text-gray-900">Transfer sent!</h2>
        <p className="text-16 text-gray-600">
          <span className="font-semibold text-gray-900">${Number(amount).toFixed(2)}</span>{" "}
          is on its way to <span className="font-medium">{recipientEmail}</span>.
        </p>
      </div>
      <div className="max-w-md rounded-lg border border-success-100 bg-white p-4 text-left">
        <p className="text-14 text-gray-700">
          Your transfer will show as <strong>Processing</strong> in transaction history.
          It typically updates to <strong>Success</strong> within about{" "}
          <strong>4 business days</strong> once settlement completes.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild className="rounded-xl bg-brand-gradient font-semibold shadow-md hover:opacity-95">
          <Link href="/">View dashboard</Link>
        </Button>
        <Button variant="outline" onClick={onSendAnother}>
          Send another transfer
        </Button>
      </div>
    </div>
  );
};

export default TransferSuccess;
