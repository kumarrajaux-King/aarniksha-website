import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import Reveal from '../components/Reveal';
import { EnquiryProvider } from '../components/Enquiry';
import { SITE_URL } from '../lib/config';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aarniksha Solutions | Building Trust. Delivering Excellence.',
    template: '%s',
  },
  description: 'Aarniksha Solutions is a talent and business solutions partner delivering IT and non-IT staffing, executive search, RPO, payroll compliance and HR consulting.',
  openGraph: {
    type: 'website',
    siteName: 'Aarniksha Solutions',
    images: ['/assets/logo.png'],
  },
  icons: { icon: '/assets/logo.png' },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <EnquiryProvider>
          <ScrollProgress />
          <div id="top" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <Header />
            {children}
            <Footer />
          </div>
          <BackToTop />
          <Reveal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
