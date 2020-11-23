import React from 'react'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Toolbar,
    MonthView,
    WeekView,
    ViewSwitcher,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    DragDropProvider,
    EditRecurrenceMenu,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

class cal_week extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentDate: '2020-10-22'
        };
    }

    render() {
        const {
            data,
            currentDate
        } = this.state;
        const {classes} = this.props;

        return (
            <Paper>
                <Scheduler>
                    <ViewState
                        currentDate={currentDate}
                    />
                    <WeekView
                        startDayHour={6}
                        endDayHour={23}
                    />
                    <MonthView/>
                    <AllDayPanel/>
                    <Toolbar />
                    <ViewSwitcher />
                </Scheduler>
            </Paper>
    
        )
    }
}

export default cal_week;
