import React from 'react';
import {Container, Grid} from '@mui/material'
import Chat from '../../components/Chat'
import Posts from '../../components/Posts';
import Menu from '../../components/Menu';

const Home = ({socket, username, room}) => {
    return (
        <Container >
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Posts />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Chat  socket={socket} username={username} room={room} />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Menu />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;