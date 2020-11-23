import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function bar_header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" href="/cal_week">캘린더</Button>
                <Button color="inherit" href="/cal_week">일정자세히</Button>
            </Toolbar>
        </AppBar>
    )
}

export default bar_header;
