import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        background: 'white',
        color: 'black'
    },
}
class bar_header extends React.Component {
    render() {
        const { classes } = this.props;
        return (

            <AppBar className={classes.root} position="static" >
                <Toolbar>
                    <img src={process.env.PUBLIC_URL + '/image/LOGO.png'} style={{ width: 200, height: 80 }} alt="profile" />
                    <Button color="inherit" href="/cal_week">캘린더</Button>
                    <Button color="inherit" href="/cal_week">일정자세히</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(bar_header);
