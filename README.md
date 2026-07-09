# BankEase

A full-stack banking dashboard built with Next.js 14, Appwrite, Plaid, and Dwolla. Users can sign up, link bank accounts, view balances and transactions, and send ACH transfers.

## Prerequisites

- Node.js 18+
- An [Appwrite Cloud](https://cloud.appwrite.io) project (or self-hosted Appwrite)
- A [Plaid](https://dashboard.plaid.com) sandbox account
- A [Dwolla](https://dashboard.dwolla.com) sandbox account

### Appwrite project must be active

Free-tier Appwrite Cloud projects pause after inactivity. If sign-up/sign-in fails with `Access to this resource is blocked` / `general_resource_blocked`:

1. Open [cloud.appwrite.io](https://cloud.appwrite.io)
2. Find the project (check **Paused** filter if needed)
3. Click **Restore** / unpause
4. Retry sign-up

Also ensure Email/Password auth is enabled and your API key has `users.read`, `users.write`, `sessions.write`, and database scopes.

## Appwrite setup

Create a database and three collections with the attributes below. Allow the server API key full access; for client sessions, grant document read/write as needed for authenticated users.

### Users collection

| Attribute | Type | Required |
|-----------|------|----------|
| `firstName` | string | yes |
| `lastName` | string | yes |
| `address1` | string | yes |
| `city` | string | yes |
| `state` | string | yes |
| `postalCode` | string | yes |
| `dateOfBirth` | string | yes |
| `ssn` | string | yes |
| `email` | string | yes |
| `userId` | string | yes |
| `dwollaCustomerId` | string | yes |
| `dwollaCustomerUrl` | string | yes |

Enable **Email/Password** auth in Appwrite Auth settings.

### Banks collection

| Attribute | Type | Required |
|-----------|------|----------|
| `userId` | string | yes |
| `bankId` | string | yes |
| `accountId` | string | yes |
| `accessToken` | string | yes |
| `fundingSourceUrl` | string | yes |
| `shareableId` | string | yes |

### Transactions collection

| Attribute | Type | Required |
|-----------|------|----------|
| `name` | string | yes |
| `amount` | string | yes |
| `senderId` | string | yes |
| `senderBankId` | string | yes |
| `receiverId` | string | yes |
| `receiverBankId` | string | yes |
| `email` | string | yes |
| `channel` | string | no (default `online`) |
| `category` | string | no (default `Transfer`) |

## Environment variables

Copy `.env.example` to `.env` and fill in values:

```bash
cp .env.example .env
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Public app URL (e.g. `https://your-app.vercel.app`) |
| `NEXT_PUBLIC_APPWRITE_ENDPOINT` | Appwrite API endpoint |
| `NEXT_PUBLIC_APPWRITE_PROJECT` | Appwrite project ID |
| `APPWRITE_DATABASE_ID` | Database ID |
| `APPWRITE_USER_COLLECTION_ID` | Users collection ID |
| `APPWRITE_BANK_COLLECTION_ID` | Banks collection ID |
| `APPWRITE_TRANSACTION_COLLECTION_ID` | Transactions collection ID |
| `NEXT_APPWRITE_KEY` | Appwrite server API key |
| `PLAID_CLIENT_ID` | Plaid client ID |
| `PLAID_SECRET` | Plaid secret (sandbox) |
| `PLAID_ENV` | `sandbox`, `development`, or `production` |
| `DWOLLA_KEY` | Dwolla app key |
| `DWOLLA_SECRET` | Dwolla app secret |
| `DWOLLA_ENV` | `sandbox` or `production` |
| `NEXT_PUBLIC_SENTRY_DSN` | Optional Sentry DSN (leave blank to disable) |
| `SENTRY_AUTH_TOKEN` | Optional — enables source map upload on deploy |
| `SENTRY_ORG` | Optional Sentry org slug |
| `SENTRY_PROJECT` | Optional Sentry project slug |

## Deploy to Vercel

1. Push the repo to GitHub and import it in [Vercel](https://vercel.com).
2. Set **Framework Preset** to Next.js and **Node.js** to 18+ (`.nvmrc` uses 20).
3. Add every variable from `.env.example` under **Project → Settings → Environment Variables** for Production (and Preview if you use branch deploys).
4. Set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://bankease.vercel.app`).
5. Keep third-party keys in **sandbox** until you are ready for live banking.
6. In Appwrite, add your Vercel domain to **Platforms** if you use client-side SDK calls from the browser.
7. Deploy. Vercel runs `npm run build` then `next start`.

### Production checklist

- [ ] Appwrite project is **active** (not paused) and collections match the schema above
- [ ] `NEXT_PUBLIC_SITE_URL` matches the live domain
- [ ] `PLAID_ENV` and `DWOLLA_ENV` match your intended environment
- [ ] Session cookies use `secure: true` in production (handled automatically when `NODE_ENV=production`)
- [ ] `.env` is never committed (already in `.gitignore`)

### Optional: Sentry

Set `NEXT_PUBLIC_SENTRY_DSN` to enable error monitoring. For source map uploads during CI/CD, also set `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, and `SENTRY_PROJECT`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Unauthenticated users are sent to `/uiux` (marketing). Sign up at `/sign-up` or sign in at `/sign-in`.

## End-to-end sandbox checklist

1. Open `/uiux` and click **Get Started**.
2. Create an account on `/sign-up` (creates Appwrite user + Dwolla customer).
3. Connect a bank with Plaid Link (use [Plaid sandbox credentials](https://plaid.com/docs/sandbox/test-credentials/)).
4. Confirm the dashboard shows balances and recent transactions.
5. Open **My Banks** and copy the shareable ID from a card.
6. Sign up a second user, link a bank, then use **Payment Transfer** with the first user’s shareable ID.
7. Confirm the transfer appears in transaction history for both sides.
8. Log out from the sidebar footer and confirm redirect to `/sign-in`.

## Scripts

| Script | Command |
|--------|---------|
| Dev | `npm run dev` |
| Build | `npm run build` |
| Start | `npm run start` |
| Lint | `npm run lint` |

## Stack

- **Next.js 14** (App Router + Server Actions)
- **Appwrite** — auth and document storage
- **Plaid** — bank linking and transactions
- **Dwolla** — ACH transfers
- **Tailwind CSS** + shadcn/ui
