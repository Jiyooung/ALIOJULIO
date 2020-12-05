/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import sidebarStyles from './asidebar.module.css';
import SearchInfo from './search_info';
import SearchDetail from './search_detail';
import Simple_modal from './simple_modal';
import { sample_data } from './sample_data';
import { Dialog} from '@material-ui/core';


class asidebar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            eventData: sample_data,
            isModalOn: false,
            행사명: "",
            행사유형: "",
            지역: "",
        };
        this.onEventSelectChange = this.onEventSelectChange.bind(this);
        this.onLocationSelectChange = this.onLocationSelectChange.bind(this);
        this.onEventNameChange = this.onEventNameChange.bind(this);
        this.onEventNameClick = this.onEventNameClick.bind(this);
        this.openSearchDetail = this.openSearchDetail.bind(this);
        this.handleColse = this.handleColse.bind(this);
    }

    onEventSelectChange(event) {
        this.setState({ 행사유형: event.target.value });
        console.log(event.target.value);
    }

    onLocationSelectChange = (event) => {
        this.setState({ 지역: event.target.value });
    }

    onEventNameChange(event) {
        this.setState({ 행사명: event.target.value });
    }

    onEventNameClick(key) {
        this.setState({ selectedKey: key });

        console.log(key, 'is selected');
    }

    /** 검색 버튼 */
    openSearchDetail = (event) => {
        
        if (this.state.selectedKey != -1) {
            this.setState({isModalOn: true});
        }
    }

    handleColse = (event) => {
        this.setState({ isModalOn: false });
        this.setState({ selectedKey: -1 });
    }

    render() {
        const {
            selectedKey,
            eventData,
            isModalOn,
            행사명,
            행사유형,
            지역,
        } = this.state;

        const mapToComponents = (data) => {
            data.sort((a, b) => { return a.title > b.title; });
            data = data.filter(
                (appointment) => {
                    return appointment.title.toLowerCase().indexOf(행사명) > -1;
                }
            );
            return data.map((appointment, i) => {
                return (<SearchInfo
                    appointment={appointment}
                    key={appointment.id}
                    onClick={() => { this.onEventNameClick(appointment.id) }} />
                );
            });
        };

        return (
            <span className={sidebarStyles.area_desc}>
                <span className={sidebarStyles.empty_box}>  </span>
                <label className={sidebarStyles.label}>행사유형</label>
                <select className={sidebarStyles.combo_box}
                    type="행사유형" value={this.state.행사유형} onChange={this.onEventSelectChange} >
                    <option value="전체">전체</option>
                    <option value="견학/탐방">견학 탐방</option>
                    <option value="체험">체험</option>
                    <option value="교육/강연">교육 강연</option>
                    <option value="세미나">세미나</option>
                    <option value="공모전">공모전</option>
                    <option value="자원봉사">자원봉사</option>
                    <option value="문화/예술">문화 예술</option>
                    <option value="국민참여">국민참여</option>
                </select>

                <label className={sidebarStyles.label}>지역</label>
                <select className={sidebarStyles.combo_box}
                    type="지역" value={this.state.지역} onChange={this.onLocationSelectChange}>
                    <option value="전체">전체</option>
                    <option value="강원도">강원도</option>
                    <option value="경기도">경기도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="경상북도">경상북도</option>
                    <option value="광주광역시">광주광역시</option>
                    <option value="대구광역시">대구광역시</option>
                    <option value="부산광역시">부산광역시</option>
                    <option value="서울특별시">서울특별시</option>
                    <option value="세종특별자치시">세종특별자치시</option>
                    <option value="울산광역시">울산광역시</option>
                    <option value="인천광역시">인천광역시</option>
                    <option value="전라남도">전라남도</option>
                    <option value="전라북도">전라북도</option>
                    <option value="제주특별자치도">제주특별자치도</option>
                    <option value="충청남도">충청남도</option>
                    <option value="충청북도">충청북도</option>
                </select>
                <label className={sidebarStyles.label}>행사명</label>
                <input className={sidebarStyles.input_box}
                    type="행사명" name="행사명"
                    value={this.state.행사명}
                    onChange={this.onEventNameChange}></input>
                <div>{mapToComponents(eventData)}</div>
                <button className={sidebarStyles.submit_button} type="submit" onClick={this.openSearchDetail}>검색</button>
                <SearchDetail
                    isSelected={selectedKey != -1}
                    appointment={eventData[selectedKey]} />
                <Dialog open={isModalOn} onClose={this.handleColse}>
                    <Simple_modal curdata={eventData[selectedKey]}></Simple_modal>
                </Dialog>
            </span>
        );
    }
}
export default asidebar;