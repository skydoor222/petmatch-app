import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'PetMatch App',
  description: 'Find a good companion for your pet profile',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#f7fafc' }}>
        {children}
      </body>
    </html>
  );
}
