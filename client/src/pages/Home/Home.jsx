import React from 'react'
import "./Home.scss"
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  return (
    <div className='home'>
      <Slider />
      
      <Categories />
      <FeaturedProducts type="fantasy" />
      <FeaturedProducts type="romance" />
      <FeaturedProducts type="thriller" />
      <Contact />
      
    </div>
  )
}

export default Home