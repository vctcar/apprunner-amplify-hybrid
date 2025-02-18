'use client'

import { ContactForm } from '../src/components/forms/ContactForm';
import '@aws-amplify/ui-react/styles.css';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  );
}