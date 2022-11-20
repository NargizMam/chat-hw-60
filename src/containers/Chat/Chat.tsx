import React from 'react';
import { Grid, Typography} from "@mui/material";
import NewPost from "../../components/NewPost/NewPost";
import Posts from "../../components/Post/Posts";

const Chat = () => {
    return (
        <>
                <Typography variant="h3" style={{textAlign: 'center', margin: 10}}>
                    Чат
                </Typography>
            <Grid container spacing={4} style={{margin: 30}}>
                <Grid item xs={4}>
                    <NewPost/>
                </Grid>
                <Grid item xs={7}>
                    <Posts/>
                </Grid>
            </Grid>
        </>

    );
};

export default Chat;