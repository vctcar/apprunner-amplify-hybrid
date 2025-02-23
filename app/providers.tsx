'use client'

import { ReactNode, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { AmplifyConfig } from '../src/lib/amplify-config';
import '@aws-amplify/ui-react/styles.css';

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    console.log('Providers component mounted');
  }, []);

  return (
    <AmplifyConfig>
      <Authenticator.Provider>
        <Authenticator
          services={{
            handleError: (error) => {
              console.error('Authentication error:', error);
              return error;
            },
          }}
        >
          {children}
        </Authenticator>
      </Authenticator.Provider>
    </AmplifyConfig>
  );
}