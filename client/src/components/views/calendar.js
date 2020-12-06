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
  DateNavigator,
  TodayButton,
  ViewSwitcher,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import './calendar.scss';
import { Dialog } from '@material-ui/core';
import Simple_modal from './simple_modal';

function Date_to_str(date) { // 날짜 객체를 yyyy-mm-dd로 변환하는 함수
  var sYear = date.getFullYear();
  var sMonth = date.getMonth() + 1;
  var sDate = date.getDate();

  sMonth = sMonth > 9 ? sMonth : "0" + sMonth;
  sDate = sDate > 9 ? sDate : "0" + sDate;
  return sYear + "-" + sMonth + "-" + sDate;
}

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
      types: [],
      event_title: "",
      selectedKey: -1,
      location: "",
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
          backgroundColor: 'D0EBFF',
          borderRadius: '8px',
        }}
        onClick={this.ScheduleModal}
      >
        {children}
      </Appointments.Appointment>
    );


  MonthLayout = ({  // 모든 일정 디자인
    setScrollingStrategy, ...restProps
  }) => (
      <MonthView.Layout
        {...restProps}
        scrolling
      >
      </MonthView.Layout>
    );

  ScheduleModal = (event) => {
    this.setState({ isModalOn: true });
    this.setState({ curData: event.data });
  }

  handleColse = (event) => {
    this.setState({ isModalOn: false });
    this.setState({ curData: [] });
  }

  render() {
    const {
      currentDate,
      startDayHour,
      endDayHour,
      curData
    } = this.state;
    const { events } = this.props;

    return (
      <span>
        <Scheduler
          data={events}
          height="150%"
        >

          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          />
          <MonthView
            height="150%"
            layoutComponent = {MonthView.Layout}/>
          <WeekView
            startDayHour={startDayHour}
            endDayHour={endDayHour}
          />
          <Appointments appointmentComponent={this.Appointment} />
          <AllDayPanel />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
        </Scheduler>
        <Dialog open={this.state.isModalOn} onClose={this.handleColse}>
          <Simple_modal curdata={curData}></Simple_modal>
        </Dialog>
      </span>

    );
  }
}

export default calendar;