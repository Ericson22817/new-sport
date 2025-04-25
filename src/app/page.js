import Navbar from "../component/navbar";
import HeroSection from "../component/hero";
import Footer from "../component/footer"
import React from 'react'
import MatchSection from '../component/fixtures'
import AboutUs from "../component/about";
import LeagueTable from "../component/leaguetable";
import LatestNews from "../component/blog";



const Home = () => {
  return (
    <div className=" max-sm:overflow-x-hidden">
      <HeroSection/>
      <MatchSection/>
      <AboutUs/>
      <LeagueTable/>
      <LatestNews/>
    </div>
  )
}

export default Home
