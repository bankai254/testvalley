import React from 'react';

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import Rollbar from 'rollbar';

const CustomErrorComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Error statusCode={props.statusCode} />;
};

Error.getInitialProps = ({ req, res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  // Only require Rollbar and report error if we're on the server
  if (!process.browser) {
      console.log('Reporting error to Rollbar...')
      const rollbar = new Rollbar(process.env.ROLLBAR_SERVER_TOKEN)
      rollbar.error(err, req, (rollbarError) => {
          if (rollbarError) {
              console.error('Rollbar error reporting failed:')
              console.error(rollbarError)
              return
          }
          console.log('Reported error to Rollbar')
      })
  }
  return { statusCode }
}

CustomErrorComponent.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return Error.getInitialProps(contextData);
};

export default CustomErrorComponent;
