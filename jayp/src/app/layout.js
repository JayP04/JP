import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jay Patel | Portfolio',
  description: 'Software Engineer | Blockchain Enthusiast | UI/UX Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all duration-300`}>{children}</body>
    </html>
  );
}