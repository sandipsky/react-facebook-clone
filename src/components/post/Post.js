import React, { useState } from 'react'
import './post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const Post = ({post}) => {

    const[like,setlike] = useState(post.likes)
    const[isliked, setisliked] = useState(false)

    const likehandler = () => {
        setlike(isliked? like - 1 : like + 1)
        setisliked(!isliked)
    }
  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="topleft">
                    <img className="postprofileimg" src={post.profile} alt="" />
                    <span className="postusername">{post.username}</span>
                    <span className="postdate">{post.date}</span>
                </div>
                <div className="topright">
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="postcenter">
                <span className='posttext'>{post.text}</span>
                <img className='postimg' src={post.photo} alt="img" />
            </div>
            <div className="postbottom">
                <div className="partone">
                    <span className="l">
                        {like} likes
                    </span>
                    <span className="r">
                        {post.comments} Comments
                    </span>
                </div>
                <div className="parttwo">
                    <div className={isliked ? 'botitem active' : 'botitem'} onClick={likehandler} >
                    
                    {isliked? <ThumbUpAltIcon />: <ThumbUpAltOutlinedIcon /> }
                    <span> Like</span>
                    </div>
                    <div className="botitem">
                    <ChatBubbleOutlineIcon />
                    <span> Comment</span>
                    </div>
                    <div className="botitem">
                    <ShareIcon />
                    <span> Share</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post