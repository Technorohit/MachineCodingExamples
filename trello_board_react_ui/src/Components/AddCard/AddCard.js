import React from "react";
import "./AddCard.css";

const AddCard = (props) => {
  const { open, close, createNewCard, type } = props;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [assignee, setAssignee] = React.useState("");

  const submitData = () => {
    const taskData = {
      title: title,
      dueDate: dueDate,
      description: description,
      assignee: assignee,
    };
    createNewCard({type: type, taskData});
    close();
  };

  return (
    <div className="AddCard-container">
      <div className="content">
        <div className="newCardtitle">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="newCardtitle description">
          <label htmlFor="title">Desciption</label>
          <textarea
            name="title"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="newCardtitle">
          <label htmlFor="title">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></input>
        </div>
        <div className="newCardtitle">
          <label htmlFor="title">Assignee</label>
          <input
            name="title"
            value={assignee}
            date-format="DD MMMM YYYY"
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div className="createCard" onClick={submitData}>Create</div>
        <div className="closeBtn" onClick={close}>
          &times;
        </div>
      </div>
    </div>
  );
};
export default AddCard;
