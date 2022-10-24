import React from 'react'
import './profile.css'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'


const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profilecontainer">
        <Leftbar />
        <div className="profileright">
          <div className='profiletop'>
           <div className="profilesection">
           <img className='profilecover' src="/assets/post/3.jpg" alt="" />
            <img className='profileimg' src="/assets/person/2.jpg" alt="" />
           </div>
           <div className="profileinfo">
            <h2 className='profilename'>Sandip Shakya</h2>
            <span className='profiledesc'>Hello World!</span>
           </div>
           </div>
           
        
           <div className="aboutcontainer">
            <div className="about">
            <h1>User Information</h1>
            <ul>
              <li>
                <h4>Gender:  <span>Male</span> </h4>
              </li>
              <li>
                <h4>Born:  <span>Male</span> </h4>
                </li>
               <li> <h4>City:  <span>Male</span> </h4>
               </li>
               <li> <h4>School:  <span>Male</span> </h4>
               </li>
                <li>
                <h4>Work:  <span>Male</span> </h4>
                </li>
                <li>
                <h4>Relationship Status:  <span>Male</span> </h4>
               
              </li>
            </ul>
            </div>
            <div className="postcontainer">
              <Feed />
            </div>
            </div>

            
        
          
        </div>
      </div>
      </>
  )
}

export default Profile