/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import sidebarStyles from './sidebar.module.css';

const sidebar = (props) => {
  const {
    typeItems, // 행사유형 데이터
    typeProperty, // 행사유형 name
    selectedTypeItem, // 선택한 행사유형 (Default Props)
    ontypeItemSelect, // 행사유형 선택 이벤트 처리기
    locationItems,    // 지역 데이터
    locationProperty, // 행사유형 name
    selectedLocationItem, // 선택한 지역 (Default Props)
    onlocationItemSelect, // 지역 선택 이벤트 처리기
  } = props;

  return (
    <span className={sidebarStyles.area_desc}>
      <span className={sidebarStyles.empty_box}>  </span>
      <label className={sidebarStyles.label}>행사유형</label>
      <ul className={sidebarStyles.list}>
        {/* 행사유형 리스트 생성 */}
        {typeItems.map((item) => (
          <li
            key={item[typeProperty]}
            onClick={() => ontypeItemSelect(item)}
            className={
              item === selectedTypeItem ? "list-group-item active" : "list-group-item"
            }
          >
            {item[typeProperty]} {/* item[typeProperty]는 item.name과 동일 */}
          </li>
        ))}
      </ul>
      <label className={sidebarStyles.label}>지역</label>
      <ul className={sidebarStyles.list}>
        {/* 지역 리스트 생성 */}
        {locationItems.map((item) => (
          <li2
            key={item[locationProperty]}
            onClick={() => onlocationItemSelect(item)}
            className={
              item === selectedLocationItem ? "list-group-item active" : "list-group-item"
            }
          >
            {item[locationProperty]} {/* item[locationProperty]는 item.name과 동일 */}
          </li2>
        ))}
      </ul>
    </span>
  );
}

sidebar.defaultProps = {
  typeProperty: "name",
  locationProperty: "name",
};

export default sidebar;