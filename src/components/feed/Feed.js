import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import './feed.css'
import {Posts} from '../../Data'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share />
        {Posts.map(post => (
           <Post post={post} />
        ))}
       
      </div>
    </div>
  )
}

export default Feed