const requiredServerEnv = [
  "NEXT_PUBLIC_APPWRITE_ENDPOINT",
  "NEXT_PUBLIC_APPWRITE_PROJECT",
  "NEXT_APPWRITE_KEY",
  "APPWRITE_DATABASE_ID",
  "APPWRITE_USER_COLLECTION_ID",
  "APPWRITE_BANK_COLLECTION_ID",
  "APPWRITE_TRANSACTION_COLLECTION_ID",
  "PLAID_CLIENT_ID",
  "PLAID_SECRET",
  "PLAID_ENV",
  "DWOLLA_KEY",
  "DWOLLA_SECRET",
  "DWOLLA_ENV",
] as const;

export function assertServerEnv() {
  if (process.env.SKIP_ENV_VALIDATION === "1") return;

  const missing = requiredServerEnv.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
}
