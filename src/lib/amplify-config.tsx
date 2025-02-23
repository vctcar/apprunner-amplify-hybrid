'use client'
import React, { useEffect } from 'react';
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

console.log('Amplify Configuration:', config);
console.log('Auth Config:', config.Auth);
console.log('Raw outputs:', outputs);

try {
  Amplify.configure(config);
  console.log('Amplify configuration successful');
} catch (error) {
  console.error('Amplify configuration error:', error);
}

export function AmplifyConfig({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('AmplifyConfig component mounted');
  }, []);

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export { config };