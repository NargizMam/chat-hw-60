import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Button, Stack, TextareaAutosize, Typography} from "@mui/material";


const NewPost = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <Box
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
                    value={value}
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextareaAutosize
                    maxRows={5}
                    aria-label="maximum height"
                    placeholder="Enter your messages"
                    defaultValue={value}
                    style={{ width: 500 , height: 200, margin:15}}
                />
            </div>
            <Stack direction="row" spacing={2} style={{margin: 15}}>
                <Button variant="contained" type='submit'>Создать</Button>
            </Stack>
        </Box>
    );
};

export default NewPost;



