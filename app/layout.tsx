import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./app.css";
import "@aws-amplify/ui-react/styles.css";
import './globals.css';
import { Providers } from './providers';
//import { AmplifyConfig } from '../src/lib/amplify-config';
import { AmplifyConfig } from '@/lib/amplify-config';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>      
        <AmplifyConfig>
          <Providers>
            {children}
          </Providers>
        </AmplifyConfig>
      </body>
    </html>
  );
}