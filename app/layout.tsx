import '@/app/ui/global.css';
import { montserrat } from './ui/fonts';
import { Footer } from 'react-materialize';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat} antialiased`}>
        {children}
        </body>
        <Footer>
          <p>footer </p>
        </Footer>
    </html>
  );
}
