import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Dripping Ink | Poetry & Stories',
  description: 'A minimalist poetry and storytelling publication.',
  openGraph: {
    title: 'Dripping Ink | Poetry & Stories',
    description: 'A minimalist poetry and storytelling publication.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          
          <main>{children}</main>
          
          <footer>
             <p>&copy; {new Date().getFullYear()} Dripping Ink. All rights reserved.</p>
             <p>A minimalist static blog.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
