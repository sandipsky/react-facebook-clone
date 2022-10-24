import React from 'react'
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import './share.css'

const Share = () => {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img className="shareimg" src="/assets/person/1.png" alt="person" />
                <input placeholder="What's on your mind?" className="shareinput" type="text" />
            </div>
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <LiveTvRoundedIcon className='shareicon' />
                        <span className='shareoptiontext'>Live Video</span>
                    </div>
                    <div className="shareoption">
                        <PermMediaRoundedIcon className='shareicon' />
                        <span className='shareoptiontext'>Photo or Video</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotionsRoundedIcon className='shareicon' />
                        <span className='shareoptiontext'>Feeling/Activity</span>
                    </div>
                    <button className='sharebtn'>
                        Post
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share