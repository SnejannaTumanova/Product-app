import { QueryClientProviderWrapper } from '@/QueryClientProvider';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>
      </body>
    </html>
  );
}
