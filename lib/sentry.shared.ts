export const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

export const isSentryEnabled = Boolean(sentryDsn);
