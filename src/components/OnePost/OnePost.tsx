import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const OnePost = () => {
    return (
        <>
            <Card sx={{ minWidth: 275, margin: 3 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Messages date
                    </Typography>
                    <Typography variant="h5" component="div">
                        Messages text
                    </Typography>
                    <Typography variant="body2">
                        Messages author
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
