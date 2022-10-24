import React from 'react'
import './leftbar.css'
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import { Link } from 'react-router-dom';


const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className="leftbarwrapper">
        <ul className='list'>
          <Link className='link' to="/">
          <li className="listitem" >
            <RssFeedIcon className='itemicon'/>
            <span className="itemtext">Feeds</span>
          </li>
          </Link>
          <li className="listitem" >
            <GroupRoundedIcon className='itemicon'/>
            <span className="itemtext">Friends</span>
          </li>
          <li className="listitem" >
            <GroupsRoundedIcon className='itemicon'/>
            <span className="itemtext">Groups</span>
          </li>
          <li className="listitem" >
            <BookmarksRoundedIcon className='itemicon'/>
            <span className="itemtext">Bookmarks</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar