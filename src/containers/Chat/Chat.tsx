import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import NewPost from "../../components/NewPost/NewPost";
import {Post} from "../../types";
import OnePost from "../../components/OnePost/OnePost";
import {nanoid} from "nanoid";
import axios from "axios";

const url = 'http://146.185.154.90:8000/messages';

const Chat = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPosts, setNewPosts] = useState<Post[]>([]);
    const data = new URLSearchParams();
    let dateFrom = '';

    useEffect(() => {
        const getPosts =async () => {
            const {data} =await axios(url);

            try {
                if(posts.length === 0){
                    setPosts([...data])
                }
                if(posts.length > 0 && data.length > 0){
                    setNewPosts([...data]);
                }
                if(data.length > 0){
                    dateFrom = `?datetime=${data[data.length - 1].datetime}`;
                }

            }catch (e) {
                console.log(e);
            }

        };
        setInterval(() => {
            setNewPosts([]);
            getPosts().catch(e => console.error(e));
        }, 3000);
    }, []);

    useEffect(() => {
        if(newPosts.length > 0){
            setPosts(prev => [...prev, ...newPosts]);
        }
    },[newPosts]);


    const onSubmit =async (newPost: Post) => {
        data.set('message', `${newPost.message}`);
        data.set('author', `${newPost.author}`);
        data.set('datetime', `${newPost.datetime}`);
        try {
            await axios.post(url, data);
        }catch (e){
            console.error(e)
        }
    };


    return (
        <>
            <Typography variant="h3" style={{textAlign: 'center', margin: 10}}>
                Чат
            </Typography>
            <Grid container spacing={4} style={{margin: 30}}>
                <Grid item xs={4}>
                    <NewPost onSubmit={onSubmit}/>
                </Grid>
                <Grid item xs={7}>
                    {posts.map((post) => (
                        <>
                            <OnePost post={post}
                                     key={nanoid()}
                            />
                        </>

                    ))}
                </Grid>
            </Grid>
        </>
    );
};

export default Chat;