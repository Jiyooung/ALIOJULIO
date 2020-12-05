/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import sidebarStyles from './asidebar.module.css';
import SearchInfo from './search_info';
import SearchDetail from './search_detail';
import Simple_modal from './simple_modal';
import { Dialog } from '@material-ui/core';

const sidebar = (props) => {
  const {
    events,
    typeItems, // 행사유형 데이터
    textProperty, // 행사유형 name
    selectedTypeItem, // 선택한 행사유형 (Default Props)
    ontypeItemSelect, // 행사유형 선택 이벤트 처리기
    event_title, // 행사명
    selectedKey,
    isModalOn,
    onEventNameChange,
    onEventNameClick,
    handleColse,
    openSearchDetail,
  } = props;

  const mapToComponents = (data) => {
    data.sort((a, b) => { return a.title > b.title; });
    data = data.filter(
      (appointment) => {
        return appointment.title.toLowerCase().indexOf(event_title) > -1;
      }
    );
    return data.map((appointment) => {
      return (<SearchInfo
        appointment={appointment}
        key={appointment.id}
        onClick={() => onEventNameClick(appointment.id) } />
      );
    });
  };

  return (
    <span className={sidebarStyles.area_desc}>
      <span className={sidebarStyles.empty_box}>  </span>
      <label className={sidebarStyles.label}>행사유형</label>
      <ul className={sidebarStyles.list}>
        {/* 행사유형 리스트 생성 */}
        {typeItems.map((item) => (
          <li
            key={item[textProperty]}
            onClick={() => ontypeItemSelect(item)}
            className={
              item === selectedTypeItem ? "list-group-item active" : "list-group-item"
            }
          >
            {item[textProperty]} {/* item[textProperty]는 item.name과 동일 */}
          </li>
        ))}
      </ul>

      <label className={sidebarStyles.label}>행사명</label>
      <input className={sidebarStyles.input_box}
        type="event_title" name="event_title"
        value={event_title}
        onChange={onEventNameChange}></input>
      <div>{mapToComponents(events)}</div>
      <button className={sidebarStyles.submit_button} type="submit" onClick={openSearchDetail}>검색</button>
      <SearchDetail
        isSelected={selectedKey != -1}
        appointment={events[selectedKey]} />
      <Dialog open={isModalOn} onClose={handleColse}>
        <Simple_modal curdata={events[selectedKey]}></Simple_modal>
      </Dialog>
    </span>
  );
}

sidebar.defaultProps = {
  textProperty: "name",
};

export default sidebar;