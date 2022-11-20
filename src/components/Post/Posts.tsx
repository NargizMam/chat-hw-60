import React from 'react';
import OnePost from "../OnePost/OnePost";
import {Grid, Typography} from "@mui/material";

const Posts = () => {
    return (
        <Grid>
            <Typography variant="h5" gutterBottom>
                Здесь все сообщения
            </Typography>
            <OnePost/>
            <OnePost/>
            <OnePost/>
            <OnePost/>
        </Grid>
    );
};

export default Posts;