"use client";

import { useState } from "react";
import { Button } from "./ui/button";

type ShareableIdCopyProps = {
  shareableId?: string;
  label?: string;
  helperText?: string;
  compact?: boolean;
};

const ShareableIdCopy = ({
  shareableId,
  label = "Shareable ID",
  helperText = "Click to copy",
  compact = false,
}: ShareableIdCopyProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  if (!shareableId) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareableId);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  if (compact) {
    return (
      <Button
        type="button"
        variant="secondary"
        className="mt-2 flex w-full max-w-[320px] justify-between gap-2"
        onClick={copyToClipboard}
      >
        <span className="truncate text-xs font-medium text-black-2">
          {hasCopied ? "Copied!" : shareableId}
        </span>
        <span className="text-xs text-gray-500">{hasCopied ? "✓" : "Copy"}</span>
      </Button>
    );
  }

  return (
    <div className="mt-3 w-full max-w-[340px] rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="text-12 font-semibold text-gray-900">{label}</p>
      <p className="mt-1 text-12 text-gray-500">{helperText}</p>
      <Button
        type="button"
        variant="secondary"
        className="mt-3 flex w-full justify-between gap-2 rounded-xl border-gray-200"
        onClick={copyToClipboard}
      >
        <span className="truncate text-xs font-medium text-black-2">{shareableId}</span>
        <span className="shrink-0 text-xs font-semibold text-blue-600">
          {hasCopied ? "Copied!" : "Copy ID"}
        </span>
      </Button>
    </div>
  );
};

export default ShareableIdCopy;
