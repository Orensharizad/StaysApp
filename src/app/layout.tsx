import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import './styles.scss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main >
          <AppHeader />
          <div>
            {children}
          </div>
          <AppFooter />

        </main>
      </body>
    </html>
  )
}
