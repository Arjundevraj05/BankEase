import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const plaidEnv = process.env.PLAID_ENV ?? "sandbox";

const plaidBasePath =
  plaidEnv === "production"
    ? PlaidEnvironments.production
    : plaidEnv === "development"
      ? PlaidEnvironments.development
      : PlaidEnvironments.sandbox;

const configuration = new Configuration({
  basePath: plaidBasePath,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});

export const plaidClient = new PlaidApi(configuration);
