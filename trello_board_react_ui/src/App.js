import "./style.css";
import React from "react";
import AddCard from "./Components/AddCard/AddCard";
import RenderList from "./Components/RenderList/RenderList";

const LocalStorageHelper = {
  get: () => JSON.parse(localStorage.getItem("TaskData")),
  set: (data) => localStorage.setItem('TaskData', JSON.stringify(data))
}

const EmptyCard = (props) => {
  const { setShowAddCard, setTaskType, type } = props;
  return (
    <>
      <div
        className="taskTitle"
        onClick={() => {
          setTaskType(type);
          setShowAddCard(true);
        }}
      >
        &#43; Add a card
      </div>
    </>
  );
};

export default function App() {
  const [Todo, setTodo] = React.useState([]);
  const [InProgress, setInProgress] = React.useState([]);
  const [Done, setDone] = React.useState([]);
  const [taskType, setTaskType] = React.useState("");
  const [showAddCard, setShowAddCard] = React.useState(false);

  React.useEffect(() => {
    const TaskData = LocalStorageHelper.get();
    if(TaskData){
      console.log(TaskData)
      setTodo(TaskData.Todo);
      setInProgress(TaskData.Progress);
      setDone(TaskData.Done);
    }
    else{
      //initializer
      let Constant = { Todo: [], Progress: [], Done: [] };
      LocalStorageHelper.set(Constant)
    }

  }, []);

  const createNewCard = (_taskData) => {
    console.log(_taskData);
    if (_taskData.type === "todo") {
      setTodo([...Todo, _taskData.taskData]);
      let TaskData = LocalStorageHelper.get();
      console.log('TaskData', TaskData);
      TaskData.Todo = [...TaskData.Todo, _taskData.taskData]
      LocalStorageHelper.set(TaskData)

    } else if (_taskData.type === "done") {
      setDone([...Done, _taskData.taskData]);
      let TaskData = LocalStorageHelper.get();
      console.log('TaskData', TaskData);
      TaskData.Done = [...TaskData.Done, _taskData.taskData]
      LocalStorageHelper.set(TaskData)

    } else if (_taskData.type === "progress") {
      setInProgress([...InProgress, _taskData.taskData]);
      let TaskData = LocalStorageHelper.get();
      console.log('TaskData', TaskData);
      TaskData.Progress = [...TaskData.Progress, _taskData.taskData]
      LocalStorageHelper.set(TaskData)
    } else {
      alert("data error");
    }
  };
  return (
    <div className="App">
      <h2>Trello Board</h2>
      <div className="container">
        <div className="todo">
          <div className="title">Todo</div>
          {Todo.map((list) => (
            <RenderList {...list} key={Math.random()} />
          ))}
          <EmptyCard
            setShowAddCard={setShowAddCard}
            setTaskType={setTaskType}
            type="todo"
          />
        </div>
        <div className="inprogress">
          <div className="title"> In Progress</div>
          {InProgress.map((list) => (
            <RenderList {...list} key={Math.random()} />
          ))}
          <EmptyCard
            setShowAddCard={setShowAddCard}
            setTaskType={setTaskType}
            type="progress"
          />
        </div>
        <div className="done">
          <div className="title">Done</div>
          {Done.map((list) => (
            <RenderList {...list} key={Math.random()} />
          ))}
          <EmptyCard
            setShowAddCard={setShowAddCard}
            setTaskType={setTaskType}
            type="done"
          />
        </div>
      </div>
      {showAddCard && (
        <AddCard
          type={taskType}
          open={showAddCard}
          close={() => setShowAddCard(!showAddCard)}
          createNewCard={createNewCard}
        />
      )}
    </div>
  );
}
