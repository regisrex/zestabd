import { Pacifico } from 'next/font/google'
import './globals.css'

const inter = Pacifico({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Zestor bd',
  description: 'It\'s chairman\s birthday🥳',
  icons : {
    icon : '/cur.png',
  },
  openGraph: {
    title: "Chairman's bd🥳",
    description: "Birthday, zestor's...",
    url : "https://zestabd.vercel.app",
    images: '/og-img.png',
    authors : ["regisrex"]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="/og-img.png" />
        <meta property="og:title" content="Chairman's birthday" />
        <link rel='icon' href='/cur.png' />
        <meta property="og:description" content="It's Zestor's" />
        <meta property="og:url" content="https://github.com/regisrex/mutesa-bd" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
