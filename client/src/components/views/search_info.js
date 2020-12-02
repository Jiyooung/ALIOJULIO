import React from 'react';
import sidebarStyles from './asidebar.module.css';

export default class search_info extends React.Component {
    render() {
        return (
            <div >
                <label className={sidebarStyles.search_label} onClick={this.props.onClick}>
                    <p>{this.props.appointment.title}</p>
                </label> 
            </div>
        );
    }
}
