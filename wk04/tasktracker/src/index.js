/*
You to not need to change this planner.jsx file. This task only requires changes to the index.html file and the styles.css file.
(May 7, 2021) Insoo renamed this file as of index.js and put it at src folder.
*/
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const addEvent = (text, dateLocalStr) => {
    const newEvents = [
      ...todos,
      {
        text: text,
        isCompleted: false,
        date: dateLocalStr,
      },
    ];
    setTodos(newEvents);
  };

  const EventForm = () => {
    const [value, setValue] = React.useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addEvent(value, new Date().toLocaleTimeString());
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          id="task-input"
          type="text"
          value={value}
          placeholder="Add Event..."
          onChange={(e) => setValue(e.target.value)}
        />
        <span>Press Enter to Submit</span>
      </form>
    );
  };

  const removeEvent = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    console.log(index, temp);
    setTodos(temp);
  };

  const [todos, setTodos] = React.useState([
    {
      text: "Get Groceries",
      date: "12:39:38 PM",
    },
    {
      text: "Meal Prep",
      date: "12:41:38 PM",
    },
    {
      text: "Power Nap",
      date: "12:45:38 PM",
    },
    {
      text: "Learn React",
      date: "04:45:38 PM",
    },
  ]);
  return (
    <>
      {todos.map((todo, i) => (
        <div
          key={i}
          title="click to remove item"
          className="planner-item"
          //onClick={(i) => removeEvent(i)}
          onClick={(index) => removeEvent(index)}
          //onClick={removeEvent}
        >
          {todo.text} - {todo.date || "N/A"} (-)
        </div>
      ))}
      <EventForm addEvent={addEvent} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
