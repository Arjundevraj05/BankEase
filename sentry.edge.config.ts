import * as Sentry from "@sentry/nextjs";

import { isSentryEnabled, sentryDsn } from "./lib/sentry.shared";

if (isSentryEnabled) {
  Sentry.init({
    dsn: sentryDsn,
    tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1,
    debug: false,
  });
}
