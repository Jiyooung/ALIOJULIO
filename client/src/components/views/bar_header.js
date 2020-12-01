import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        background: 'white',
        color: 'black',
        shadowOpacity: 0,
        elevation: 0

    },
}
class bar_header extends React.Component {
    render() {
        const { classes } = this.props;
        return (

            <AppBar className={classes.root} position="static" >
                <Toolbar>
                    <img src={process.env.PUBLIC_URL + '/image/LOGO.png'} style={{ width: 200, height: 80 }} alt="profile" />
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(bar_header);
