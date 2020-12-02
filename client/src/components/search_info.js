import React from 'react';
import sidebarStyles from './views/asidebar.module.css';
import { Dialog} from '@material-ui/core';

export default class search_info extends React.Component {
    render() {
        return (
            <div >
                <label className={sidebarStyles.search_label} onClick={this.props.onClick}>
                    {this.props.appointment.title}
                </label> 
            </div>
        );
    }
}
