import * as React from 'react';
import modalStyles from './modal.module.css';

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

            <form className={modalStyles.container}>
                <label className={modalStyles.label}>행사명</label>
                <input className={modalStyles.input_box} value={data.title} disabled={true}></input>
                <label className={modalStyles.label}>행사 분류</label>
                <input className={modalStyles.input_box} value={""} disabled={true}></input>
                <label className={modalStyles.label}>기관명</label>
                <input className={modalStyles.input_box} value={""} disabled={true}></input>
                <label className={modalStyles.label}>주소</label>
                <input className={modalStyles.input_box} value={""} disabled={true}></input>
                <label className={modalStyles.label}>신청기간</label>
                <input className={modalStyles.input_box} value={""} disabled={true}></input>
                <input className={modalStyles.input_box} value={""} disabled={true}></input>
                <label className={modalStyles.label}>행사기간</label>
                <input className={modalStyles.input_box} value={""} disabled={true}></input>
                <input className={modalStyles.input_box} value={""} disabled={true}></input>
                <label className={modalStyles.label}>세부내용</label>
                <input className={modalStyles.input_box} value={""} disabled={true}></input>
                <label className={modalStyles.label}/>
            </form>
        )
    }
}

export default simple_modal;