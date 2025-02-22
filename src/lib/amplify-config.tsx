'use client'
import React from 'react';
import { Amplify } from "aws-amplify";
import { ThemeProvider } from '@aws-amplify/ui-react';
import outputs from "../../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

const config = {
  ...outputs, // Spread the outputs configuration
  API: {
    GraphQL: {
      endpoint: process.env.NEXT_PUBLIC_API_URL,
      region: process.env.NEXT_PUBLIC_REGION,
      defaultAuthMode: 'apiKey',
      apiKey: process.env.NEXT_PUBLIC_API_KEY
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