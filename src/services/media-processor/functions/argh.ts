import * as Sentry from '@sentry/serverless';

export const main = Sentry.AWSLambda.wrapHandler<void, void>(async () => {
  //
});
