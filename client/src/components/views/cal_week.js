/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  DateNavigator,
  TodayButton,
  ViewSwitcher,
  AllDayPanel,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Asidebar from './asidebar'
import sidebarStyles from './asidebar.module.css';
import './calendar.scss';
import { appointments } from './appointments';

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

const resources = [{  // 특정 조건의 일정만 색 부여하기
  fieldName: 'location',
  title: 'Location',
  instances: [
    { id: '서울시 용산구', text: '용산구', color: '#EC407A' },
    { id: '서울시 강동구', text: '강동구', color: '#7E57C2' },
    { id: '서울시 모르겠구,,,', text: '모르겠구,,,', color: '#E0A2BB' },
  ],
}];

const Appointment = ({  // 모든 일정 디자인
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#E0A2BB',
      borderRadius: '8px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

/* eslint-disable-next-line react/no-multi-comp */
class cal_week extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments, // 정보 없음.. 디비에서 불러오는게 목표
      currentDate: Date_to_str(new Date()), // 현재 날짜로 설정!!
      startDayHour: 9,
      endDayHour: 19,
      행사유형: "",
      행사명: "",
      지역: ""
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
  }

  onEventSelectChange = (event) => {
    this.setState({ 행사유형: event.target.value });
  }

  onLocationSelectChange = (event) => {
    this.setState({ 지역: event.target.value });
  }

  onSubmitHandler = (event) => {
    // event.preventDefault();
    // let data = {
    //   행사명: event.target.행사명.value,
    //   행사유형: this.state.행사유형,
    //   지역: this.state.지역
    // }
    // alert(data.행사명);
    // alert(data.행사유형);
    // alert(data.지역);
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
                <Asidebar/>
            </div>
            <div className={sidebarStyles.calender}>
              <span>
                <Scheduler
                  data={data}
                >

                  <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={this.currentDateChange}
                  />
                  <MonthView />
                  <WeekView
                    startDayHour={startDayHour}
                    endDayHour={endDayHour}
                  />
                  {/* <Appointments appointmentComponent={Appointment} /> */}
                  <Appointments />
                  <AppointmentTooltip
                    showCloseButton
                  />
                  <AllDayPanel/>
                  <Toolbar/>
                  <DateNavigator />
                  <TodayButton />
                  <ViewSwitcher/>
                  <Resources
                    data={resources}
                  />
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