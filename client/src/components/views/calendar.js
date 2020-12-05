/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
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
import './calendar.scss';
import { sample_data } from './sample_data';
import { Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import Simple_modal from './simple_modal';

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
  fieldName: 'id',
  title: 'ID',
  instances: [
    { id: 1, text: 'ID1', color: '#EC407A' },
    { id: 2, text: 'ID2', color: '#7E57C2' },
  ],
}];


/* eslint-disable-next-line react/no-multi-comp */
class calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // 정보 없음.. 디비에서 불러오는게 목표
      currentDate: Date_to_str(new Date()), // 현재 날짜로 설정!!
      startDayHour: 9,
      endDayHour: 19,
      isModalOn: false,
      curData: [],
      행사유형: "",
      행사명: "",
      지역: ""
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
  }

  Appointment = ({  // 모든 일정 디자인
    children, style, onClick, ...restProps
  }) => (
      <Appointments.Appointment
        {...restProps}
        style={{
          ...style,
          backgroundColor: '#E0A2BB',
          borderRadius: '8px',
        }}
        onClick={this.ScheduleModal}
      >
        {children}
      </Appointments.Appointment>
    );

  ScheduleModal = (event) => {
    this.setState({ isModalOn: true });
    this.setState({ curData: event.data });
    //console.log(event);
  }

  handleColse = (event) => {
    this.setState({ isModalOn: false });
    this.setState({ curData: [] });
  }

  render() {
    const {
      currentDate,
      data,
      startDayHour,
      endDayHour,
      isModalOn,
      curData
    } = this.state;
    const { classes, events } = this.props;

    return (
      <span>
        <Scheduler
          data={events}
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
          <Appointments appointmentComponent={this.Appointment} />
          {/*<Appointments onClick={this.ScheduleModal}
                  draggable/>*/}
          {/* <AppointmentTooltip
                    showCloseButton
                  /> */}
          <AllDayPanel />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Resources
            data={resources}
          />
        </Scheduler>
        <Dialog open={this.state.isModalOn} onClose={this.handleColse}>
          <Simple_modal curdata={curData}></Simple_modal>
        </Dialog>
      </span>

    );
  }
}

export default withStyles(styles, { name: 'EditingCal' })(calendar);