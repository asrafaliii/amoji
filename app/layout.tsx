// import '@fontsource/poppins/500.css'
// import '@fontsource/poppins/700.css'
import './globals.css'
import { Providers } from './providers'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-[#E4E6EB] dark:bg-[#242526]">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
