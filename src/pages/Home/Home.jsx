import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import ProductSection from '../../components/ProductSection/ProductSection'
import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import { products, bestSellers } from '../../data/products'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <Navbar />
        <Banner />
      </div>

      <ProductSection
        title="Yangi mahsulotlar"
        subtitle="Eng so'nggi mahsulotlarimizni ko'rib chiqing va tanlang"
        products={products}
      />

      <GalleryCarousel />

      <ProductSection
        title="Eng ko'p sotilgan"
        subtitle="Eng haridorgir bo'lgan mahsulotlarimizni ko'rib chiqing"
        products={bestSellers}
      />

      <Categories />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
