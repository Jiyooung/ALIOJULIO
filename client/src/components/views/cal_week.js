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
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox } from '@material-ui/core';


const styles = theme => ({
  container: {
    

  },
  asideBar: {
    background: '#E0A2BB',
    marginTop: '15px'
  },
  main: {
  },
  combobox: {
    width: '150px'
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
      data: [], // 정보 없음.. 디비에서 불러오는게 목표
      currentDate: Date_to_str(new Date()), // 현재 날짜로 설정!!
      startDayHour: 9,
      endDayHour: 19,
    };
    this.keyword="";
  }

  onSubmitHandler = (event) => {
    alert(this.keyword);
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
      <Grid container spacing={3}>
        <Grid item xs={2} className={classes.asideBar}>
          <form onSubmit={this.onSubmitHandler}>
          <label type="keyword" value="this.keyword">키워드</label>
          <input></input>
          <label>행사 분류</label>
          <select className={classes.combobox}>
            <option value="행사1">행사1</option>
            <option value="행사2">행사2</option>
          </select>
          <label>시,도명</label>
          <input></input>
          <lable>시,군,구명</lable>
          <input></input>
          <button type="submit">
            검색
          </button>
          </form>
        </Grid>
        <Grid item xs={10}>
            <Scheduler
              data={data}
              height={660}
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
              <ViewSwitcher />
            </Scheduler>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { name: 'EditingCal' })(cal_week);