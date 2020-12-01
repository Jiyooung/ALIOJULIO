import * as React from 'react';

class simple_modal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.curdata
        }
    }

    render() {
        const data = this.props.curdata;
        return (

            <div>
                <p>제목 : {data.title}</p>
                <p>신청기간 : YYYY-MM-DD ~ YYYY-MM-DD</p>
                <p>행사기간 : </p>
                <p>유-무료 여부 : </p>
                <p>기관명 : {data.chrgDeptNe} </p>
                <p>주최구분 : ㅎㅎ</p>
                <p>담장자 연락처 : {data.tel}</p>
            </div>
        )
    }
}

export default simple_modal;