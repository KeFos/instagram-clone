import React, { useState, useEffect } from 'react'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import TelegramIcon from '@material-ui/icons/Telegram';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './Post.css';
import User from '../../../../models/User';
import db from '../../../../containers/firebase';

export interface PostInterface {
    id:string,
    caption:string,
    postImage:string,
    timestamp:string,
    userID: string
}

const Post = (Props:PostInterface) => {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        
        db.collection('users')
            .doc(Props.userID)
            .onSnapshot( (ss) => {
                
                setUser({
                    id: Props.userID,
                    username: ss.data()?.username,
                    name: ss.data()?.name,
                    profilePicture: ss.data()?.profilePicture
                });
            });

    });

    return (
        <div className="Post">
           <div className="Post__header">

                <div className="User__post">
                    
                    {/* logo */}
                    <AccountCircleIcon/>

                    {/* username */}
                    <h5>{ user?.username }</h5>

                </div>

                <div className="Menu">
                    <MoreHorizIcon/>
                </div>

            </div> 

            <div className="Post__container">
                <div className="Post__image">
                    {/* <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F37%2Fe2%2Ff9%2F37e2f97f7d248c8c789283801747658e.jpg&f=1&nofb=1" alt=""/> */}
                    <img src={Props.postImage} alt=""/>
                </div>

                <div className="Post__detail">
                    <div className="Bar__wrapper">
                        <div className="Leftbar">
                            <FavoriteBorderIcon/>
                            <ChatBubbleOutlineRoundedIcon/>
                            <TelegramIcon/>
                        </div>
                        <div className="Rightbar">
                            <BookmarkBorderOutlinedIcon/>
                        </div>
                    </div>

                    <div className="Detail__wrapper">
                        <div className="Like__details">Liked by and others</div>
                        <div className="Caption"> <span>{user?.username}</span> {Props.caption} </div>
                        <div className="Comments">
                        </div>
                        <form>
                            <input type="text" placeholder="Add comment..."/>
                            <button type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
