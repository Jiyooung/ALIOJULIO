/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import sidebarStyles from './sidebar.module.css';
import { getEvents } from './getData';
import { getTypes, getLocations } from '../../_actions/types';
import Calendar from './calendar'
import Sidebar from './sidebar'

/* eslint-disable-next-line react/no-multi-comp */
class cal_week extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      events: [], // 정보 없음.. 디비에서 불러오는게 목표
      types: [],
      locations: [],
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
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
  };

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
              />
            </div>
            <div className={sidebarStyles.calender}>
              <Calendar
                events={data}
              />
            </div>
          </div>
        </form>
      </Paper>
    );
  }
}

export default cal_week;