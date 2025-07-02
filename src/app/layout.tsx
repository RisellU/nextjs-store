import { Raleway } from 'next/font/google'
import { Header } from "app/components/shared/Header";
import { Footer } from 'app/components/shared/Footer'
import "app/sass/globals.sass";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100','300','500','700']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
