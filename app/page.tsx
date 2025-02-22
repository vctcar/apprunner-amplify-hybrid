'use client'

import { ContactForm } from '../src/components/forms/ContactForm';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { AmplifyConfig } from '../src/lib/amplify-config';
import '@aws-amplify/ui-react/styles.css';

export default function Home() {
  const { user, signOut } = useAuthenticator();
  
  return (
    <AmplifyConfig>
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
          <ContactForm />
          <div className="text-center mt-8">
            <h2>{user?.username}'s todos</h2>
            <button 
              onClick={signOut} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </AmplifyConfig>
  );
}