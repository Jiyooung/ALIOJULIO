/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  ViewSwitcher,
  AllDayPanel,
  AppointmentTooltip,
  Appointments
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox } from '@material-ui/core';
import sidebarStyles from './asidebar.module.css';
import {sample_data} from './sample_data'

const styles = theme => ({
  container: {


  },
  asideBar: {
    background: '#E0A2BB',
    marginTop: '15px'
  },
  main: {
    marginLeft: '220px'
  }
});

function Date_to_str(date) { // 날짜 객체를 yyyy-mm-dd로 변환하는 함수
  var sYear = date.getFullYear();
  var sMonth = date.getMonth() + 1;
  var sDate = date.getDate();

  sMonth = sMonth > 9 ? sMonth : "0" + sMonth;
  sDate = sDate > 9 ? sDate : "0" + sDate;
  return sYear + "-" + sMonth + "-" + sDate;
}

/* eslint-disable-next-line react/no-multi-comp */
class cal_week extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: sample_data, // 정보 없음.. 디비에서 불러오는게 목표
      currentDate: Date_to_str(new Date()), // 현재 날짜로 설정!!
      startDayHour: 9,
      endDayHour: 19,
      행사유형: "",
      행사명: "",
      지역: ""
    };
  }

  onEventSelectChange = (event) => {
    this.setState({ 행사유형: event.target.value });
  }

  onLocationSelectChange = (event) => {
    this.setState({ 지역: event.target.value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    let data = {
      행사명: event.target.행사명.value,
      행사유형: this.state.행사유형,
      지역: this.state.지역
    }
    alert(data.행사명);
    alert(data.행사유형);
    alert(data.지역);
  }

  render() {
    const {
      currentDate,
      data,
      startDayHour,
      endDayHour,
    } = this.state;
    const { classes } = this.props;

    return (
      <Paper>
        <form onSubmit={this.onSubmitHandler}>
          <input type="checkbox" id="menuicon"></input>
          <label for="menuicon" className={sidebarStyles.menubtn}>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className={sidebarStyles.container}>
            <div className={sidebarStyles.sidebar}>
              <span className={sidebarStyles.area_desc}>
                <label className={sidebarStyles.label}>행사명</label>
                <input className={sidebarStyles.input_box}
                  type="행사명" name="행사명"></input>
                <label className={sidebarStyles.label}>행사유형</label>
                <select className={sidebarStyles.combo_box}
                  type="행사유형" value={this.state.행사유형} onChange={this.onEventSelectChange}>
                  <option value="전체">전체</option>
                  <option value="견학_탐방">견학 탐방</option>
                  <option value="체험">체험</option>
                  <option value="교육_강연">교육 강연</option>
                  <option value="세미나">세미나</option>
                  <option value="공모전">공모전</option>
                  <option value="자원봉사">자원봉사</option>
                  <option value="문화_예술">문화 예술</option>
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
                <button className={sidebarStyles.submit_button} type="submit">검색</button>
              </span>
            </div>
            <div className={sidebarStyles.calender}>
              <span>
                <Scheduler
                  data={data}
                >
                  <ViewState
                    currentDate={currentDate}
                  />
                  <MonthView />
                  <WeekView
                    startDayHour={startDayHour}
                    endDayHour={endDayHour}
                  />
                  <AllDayPanel />
                  <Toolbar />
                  <Appointments/>
                  <AppointmentTooltip/>
                  <ViewSwitcher />
                </Scheduler>
              </span>
            </div>
          </div>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles, { name: 'EditingCal' })(cal_week);