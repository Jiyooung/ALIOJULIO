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

const event_calendar = (props) => {
  const {
    currentDate,
    events,
    startDayHour,
    endDayHour,
    Appointment,
    handleColse,
    curData,
    isModalOn,
    currentDateChange,
  } = props;

  return (
    <span>
      <Scheduler
        data={events}
      >
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={currentDateChange}
        />
        <MonthView />
        <WeekView
          startDayHour={startDayHour}
          endDayHour={endDayHour}
        />
        <Appointments appointmentComponent={Appointment} />
        <AllDayPanel />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
      </Scheduler>
      <Dialog open={isModalOn} onClose={handleColse}>
        <Simple_modal curdata={curData}></Simple_modal>
      </Dialog>
    </span>

  );
}

event_calendar.defaultProps = {
  startDayHour: 9,
  endDayHour: 19,
};
export default event_calendar;