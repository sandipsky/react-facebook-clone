import React from 'react'
import './topbar.css'
import { Search } from '@material-ui/icons'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbarcontainer">
        <div className="topbarleft">
            <Link className='link' to="/"><span className='logo'>Skybook</span></Link>
        </div>
        <div className="topbarcenter">
            <div className="searchbar">
                <Search className='searchicon'/>
                <input type="text" className='searchinput' placeholder='Search Skybook' />
            </div>
        </div>
        <div className="topbarright">
            <div className="topbaricons">
                <div className="topbariconitem">
                    <PeopleAltRoundedIcon className='ic'/>
                </div>
                <div className="topbariconitem">
                    <ChatBubbleRoundedIcon className='ic'/>
                </div>
                <div className="topbariconitem">
                    <NotificationsRoundedIcon className='ic'/>
                </div>    
            </div>
            <Link to="/profile"><img src="/assets/person/1.png" alt="a" className='topbarimg'/></Link>
        </div>
    </div>
  )
}

export default Topbar