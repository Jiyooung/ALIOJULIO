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
import sidebarStyles from './asidebar.module.css';

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
      data: [], // 정보 없음.. 디비에서 불러오는게 목표
      currentDate: Date_to_str(new Date()), // 현재 날짜로 설정!!
      startDayHour: 9,
      endDayHour: 19,
    };

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
      <Grid container spacing={3}  >
        <Grid item xs={2} >
          <form className={sidebarStyles.form}>
            <input type="checkbox" id="menuicon"></input>
            <label for="menuicon" className={sidebarStyles.menubtn}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className={sidebarStyles.container}>
              <div className={sidebarStyles.sidebar}>
                <span className={sidebarStyles.area_desc}>
                  <label className={sidebarStyles.label}>키워드</label>
                  <input className={sidebarStyles.input_box}></input>
                  <label className={sidebarStyles.label}>행사 분류</label>
                  <select className={sidebarStyles.combo_box}>
                    <option value="행사1">행사1</option>
                    <option value="행사2">행사2</option>
                  </select>
                  <label className={sidebarStyles.label}>시, 도명</label>
                  <select className={sidebarStyles.combo_box}>
                    <option value="시,도명">시,도명</option>
                    <option value="서울시">서울시</option>
                    <option value="경기도">경기도</option>
                  </select>
                </span>
              </div>
            </div>
          </form>
        </Grid>
        <Grid item xs={10} className={classes.main}>
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
            <ViewSwitcher />
          </Scheduler>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { name: 'EditingCal' })(cal_week);