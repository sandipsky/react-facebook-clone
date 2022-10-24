import React from 'react'
import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

const Home = () => {
  return (
    
      <>
      <Topbar />
      <div className="homecontainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
      </>
        
  )
}

export default Home