import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import NewPost from "../../components/NewPost/NewPost";
import {Post} from "../../types";
import OnePost from "../../components/OnePost/OnePost";
import {nanoid} from "nanoid";

const Chat = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const onSubmit = (newPost: Post) => {
        setPosts(prev => [...prev, newPost]);
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