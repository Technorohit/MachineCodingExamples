import React from "react";

const RenderList = (list) => (
    <div className="taskList">
      <div className="taskTitle">{list.title}</div>
      <div className="taskDescription"><span style={{fontWeight:800}}>Description: </span>{list.description}</div>
      <div className="additionalInfo">
        {list.dueDate && (
          <div>
            {/* <img src={TimerIcon} alt="" /> */}
            <div className="dueDate">{list.dueDate}</div>
          </div>
        )}
        {list.assignee && list.assignee.split(" ").length > 1 && (
          <div className="assignee">{`${list.assignee.split(" ")[0][0].toUpperCase()}${
            list.assignee.split(" ")[1][0].toUpperCase()
          }`}</div>
        )}
      </div>
    </div>
  );
export default RenderList;