import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import ScrollToTopButton from '@/components/scrolltotop/ScrollToTopButton'
import Search from '@/components/search/Search'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Search />
      <ScrollToTopButton />
    </main>
  )
}
