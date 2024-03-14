import React from 'react'
import userimage from "../../../Assets/Images/userimg.png"
import "./PostCard.scss"
import { Like, Comment, Share, Flag } from "../../../Assets/Images/Svgicon"

const PostCard = ({ username, time, caption, postimage }) => {
    return (
        <>
            <div className='postCard my-2'>
                <div className='d-flex justify-content-between'>
                    <figure >
                        <img src={userimage} alt="User" className='imagePost' />
                    </figure>
                    <div className='postCard_Content ps-2'>
                        <h4>{username}</h4>
                        <h6>{time}</h6>
                        {postimage && (
                            <div className='my-3'>
                                <img src={postimage} alt={postimage} />
                            </div>
                        )}
                        <p>{caption}</p>
                    </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="mainIconContainer d-flex justify-content-between">
                    <div className="leftSideIcons ">
                        <span className='ms-4'> <Like /></span>
                        <span className='mx-4'><Comment /></span>
                    </div>
                    <div className="rightSideIcons">
                        <span className='ms-4'> <Share /></span>
                        <span className='mx-4'> <Flag /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard