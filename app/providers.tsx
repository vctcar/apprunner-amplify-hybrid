'use client'

import { ReactNode } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Authenticator>
      {children}
    </Authenticator>
  );
}