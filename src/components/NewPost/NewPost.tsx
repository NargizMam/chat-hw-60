import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Button, Stack, TextareaAutosize, Typography} from "@mui/material";
import {Post} from "../../types";

interface Props {
    onSubmit: (post: Post)=> void;
}

const NewPost: React.FC<Props> = ({onSubmit}) => {
    const [post, setPost] = useState({author: '', message: ''});
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setPost(prev => ({...prev, [name]: value}));
        setDisabled(false);
    };
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setDisabled(true);
        // let datetime = new Date;
        // console.log(datetime)
        onSubmit({
            datetime: (new Date()).toUTCString(),
            ...post,
        });
    };
    return (
        <Box
            onSubmit={submitHandler}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '35ch' },
            }}
            noValidate
        >
            <Typography variant="h6" gutterBottom>
                Здесь Вы можете ввести свое сообщение
            </Typography>
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Enter your name"
                    multiline
                    maxRows={4}
                    value={post.author}
                    name='author'
                    onChange={(e) => handleChange(e)}
                    required
                />
            </div>
            <div>
                <TextareaAutosize
                    maxRows={5}
                    aria-label="maximum height"
                    placeholder="Enter your messages"
                    defaultValue={post.message}
                    name='message'
                    style={{ width: 500 , height: 200, margin:15}}
                    onChange={e => handleChange(e)}
                />
            </div>
            <Stack direction="row" spacing={2} style={{margin: 15}}>
                <Button variant="contained"
                        disabled={disabled}
                        type='submit'
                >Создать</Button>
            </Stack>
        </Box>
    );
};

export default NewPost;



