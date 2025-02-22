'use client'
import React from 'react';
import { Amplify } from "aws-amplify";
import { ThemeProvider } from '@aws-amplify/ui-react';
import outputs from "../../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

const config = {
  Auth: {
    Cognito: {
      userPoolId: outputs.auth.user_pool_id,
      userPoolClientId: outputs.auth.user_pool_client_id,
      identityPoolId: outputs.auth.identity_pool_id,
      region: outputs.auth.aws_region,
    }
  },
  API: {
    GraphQL: {
      endpoint: outputs.data.url,
      region: outputs.data.aws_region,
      defaultAuthMode: outputs.data.default_authorization_type,
      apiKey: outputs.data.api_key
    }
  }
};

Amplify.configure(config);

export function AmplifyConfig({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export { config };