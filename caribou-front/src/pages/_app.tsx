import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Josefin_Sans } from 'next/font/google'
import FootBar from '@/components/FootBar'

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    variable: '--font-josefinSans',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${josefinSans.variable} font-sans`}>
            <Component />
            <FootBar />
        </main>
    )
}
