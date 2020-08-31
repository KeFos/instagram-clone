import React, { useState, useEffect } from 'react';
import Post, { PostInterface } from '../post';

import './Home.css';
import db from '../../../../containers/firebase';

const Home:any = () => {

    const [posts, setPosts] = useState<PostInterface[]>([]);

    useEffect(() => {
        
        db.collection('posts')
            .onSnapshot((ss) => {
                setPosts(
                    ss.docs.map( (doc) => {
                        return ({
                            id: doc.id,
                            caption: doc.data().caption,
                            timestamp: doc.data().timestamp,
                            postImage: doc.data().postImage,
                            userID: doc.data().userID,
                        });
                    })
                )
            });

    }, []);

    return (
        <div className="Home">
            {
                posts.map( (post:PostInterface) => {
                    return (
                        <Post 
                            key={post.id}
                            id={post.id}
                            caption={post.caption}
                            timestamp={post.timestamp}
                            postImage={post.postImage}
                            userID={post.userID}
                        />
                    );
                })
            }
        </div>
    )
}

export default Home;
