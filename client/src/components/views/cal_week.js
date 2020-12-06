/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import sidebarStyles from './asidebar.module.css';
import './calendar.scss';
import { getEvents } from './sample_data';
import { getTypes } from './event_types';
import { getLocations } from './event_locations';
import Calendar from './calendar'
import Sidebar from './sidebar'

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
      events: [], // 정보 없음.. 디비에서 불러오는게 목표
      currentDate: Date_to_str(new Date()), // 현재 날짜로 설정!!
      startDayHour: 9,
      endDayHour: 19,
      isModalOn: false,
      curData: [],
      selectedKey: -1,
      types: [],
      locations: [],
      event_title: "",
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
          backgroundColor: '#D0EBFF',
          borderRadius: '8px',
        }}
        onClick={this.ScheduleModal}
      >
        {children}
      </Appointments.Appointment>
    );

  onSubmitHandler = (event) => {
    event.preventDefault();
    let data = {
      행사명: event.target.행사명.value,
      행사유형: this.state.행사유형,
      지역: this.state.지역
    }
    alert(data.행사명);
    // alert(data.행사유형);
    // alert(data.지역);
  }

  ScheduleModal = (event) => {
    this.setState({ isModalOn: true });
    this.setState({ curData: event.data });
    //console.log(event);
  }

  handleColse = (event) => {
    this.setState({ isModalOn: false });
    this.setState({ curData: [] });
  }

  componentDidMount = async () => {
    const types = [{ name: "전체" }, ...getTypes()];
    const locations = [{ name: "전체" }, ...getLocations()];
    this.setState({ events: await getEvents(), types, locations });
  }

  handleTypeSelect = (type) => {
    this.setState({ selectedType: type });
  };

  handleLocationSelect = (location) => {
    this.setState({ selectedLocation: location });
    console.log(location);
  };

  onEventNameChange = (event) => {
    this.setState({ event_title: event.target.value });
  }

  onEventNameClick = (key) => {
    this.setState({ selectedKey: key });

    console.log(key, 'is selected');
  }
  /** 검색 버튼 */
  openSearchDetail = (event) => {
    if (this.state.selectedKey != -1) {
      this.setState({ isModalOn: true });
    }
  }

  getPagedData = () => {
    const {
      selectedType,
      selectedLocation,
      events: allEvents,
    } = this.state;

    let eventType = "";
    let eventLocation = "";
    if (selectedType && selectedType.name && selectedType.name != "전체") {
      eventType = selectedType.name;
    }
    if (selectedLocation && selectedLocation.name && selectedLocation.name != "전체") {
      if (selectedLocation.name == "세종시") {
        eventLocation = "세종특별자치시";
      }
      else if (selectedLocation.name == "제주시") {
        eventLocation = "제주특별자치도";
      }
      else {
        eventLocation = selectedLocation.name;
      }
    }

    const events = allEvents.filter(e => {
      return e.cateNaPath.includes(eventType) && e.address.includes(eventLocation);
    })
    /*
    const filtered_type =
      selectedType && selectedType.name
        ? allEvents.filter((m) => m.type === selectedType.name)
        : allEvents;

    console.log(filtered_type);

    const filtered_location =
      selectedLocation && selectedLocation.name
        ? allEvents.filter((m) => m.location.split(" ")[0] === selectedLocation.name)
        : allEvents;
    // // orderBy() 함수: 정렬된 배열 반환
    // const sorted = _.orderBy(filtered);
    console.log(filtered_location);

    // alltypes 대신 filtered 전달
    const events = filtered_type.reduce((result, item) =>
      filtered_location.some(el => el.id === item.id)
        ? [...result, item]
        : result,
      []
    );*/

    return { data: events };
  };


  render() {
    const {
      data
    } = this.getPagedData();
    const { classes } = this.props;

    return (
      <Paper>
        <form>
          <input type="checkbox" id="menuicon"></input>
          <label for="menuicon" className={sidebarStyles.menubtn}>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className={sidebarStyles.container}>
            <div className={sidebarStyles.sidebar}>
              <Sidebar
                events={data}
                // 행사유형 관련
                typeItems={this.state.types}
                selectedTypeItem={this.state.selectedType}
                ontypeItemSelect={this.handleTypeSelect}
                // 지역 관련
                locationItems={this.state.locations}
                selectedLocationItem={this.state.selectedLocation}
                onlocationItemSelect={this.handleLocationSelect}
                // 행사명 관련
                event_title={this.state.event_title}
                selectedKey={this.state.selectedKey}
                isModalOn={this.state.isModalOn}
                curData={this.curData}
                onEventNameChange={this.onEventNameChange}
                onEventNameClick={this.onEventNameClick}
                handleColse={this.handleColse}
                openSearchDetail={this.openSearchDetail}
              />
            </div>
            <div className={sidebarStyles.calender}>
              <Calendar
                events={data}
                Appointment={this.Appointment}
                currentDate={this.state.currentDate}
                handleColse={this.handleColse}
                isModalOn={this.state.isModalOn}
                curData={this.state.curData}
                currentDateChange={this.currentDateChange}
              />
            </div>
          </div>
        </form>
      </Paper>
    );
  }
}

export default cal_week;