import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {Post} from "../../types";

interface Props {
    post: Post
}

const OnePost: React.FC<Props> = ({post}) => {
    return (
        <>
            <Card sx={{ minWidth: 275, margin: 3 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {post.datetime}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {post.message}
                    </Typography>
                    <Typography variant="body2">
                        {post.author}
                    </Typography>
                </CardContent>
                {/*<CardActions>*/}
                {/*    <Button size="small">Learn More</Button>*/}
                {/*</CardActions>*/}
            </Card>
        </>
    );
};

export default OnePost;
