import React from 'react';

export default class search_detail extends React.Component {
    render() {

        // 선택되었을 때 보여질 부분
        const details = (
            <div>
                <p>{ this.props.appointment.title }</p>
                <p>{ this.props.appointment.location }</p>
            </div>
        );

        // 아무것도 선택되지 않았을 때 보여질 부분
        const blank = (
            <div> Nothing is Selected </div>
        );

        return(
            <div>
                
                { /* isSelected props 값에 따라 어떤걸 보여줄지 정한다
                    ternary expression condition ? true : false */ }

                { this.props.isSelected ? details : blank }

             </div>
        );
    }
}

search_detail.defaultProps = {
    appointment: {
        title: "",
        location: ""
    }
}