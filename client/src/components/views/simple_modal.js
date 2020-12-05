import * as React from 'react';
import modalStyles from './asidebar.module.css';

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

            <div className={modalStyles.container}>
                <label className={modalStyles.label}>제목 : {data.title}</label>
                <p className = {modalStyles.label}>신청기간 : YYYY-MM-DD ~ YYYY-MM-DD</p>
                <p>행사기간 : {data.startDate} ~ {data.endDate} </p>
                <p>행사유형 : {data.type}</p>
                <p>위치 : {data.location}</p>
                <p>유-무료 여부 : </p>
                <p>기관명 : {data.chrgDeptNe} </p>
                <p>주최구분 : ㅎㅎ</p>
                <p>담장자 연락처 : {data.tel}</p>
            </div>
        )
    }
}

export default simple_modal;