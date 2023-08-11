import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import "./NewComponent.css";
import Footer from "./Footer";

// Custom hook to handle localStorage for tasks
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };

  return [storedValue, setValue];
}

function NewComponent() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useLocalStorage("newTasks", []);
  const [countWords, setCountWords] = useState(0);

  const enterTask = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setTasksList([...tasksList, task]);
      setTask("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (index) => {
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
  };
  const handleKeyPressDelete = (deleteBtn) => {
    if (deleteBtn.key === "+" && "Enter") {
      handleDelete();
    }
  };

  const [displayNone, setDisplayNone] = useState(true);
  const removeItem = () => {
    setDisplayNone(!displayNone);
  };

  let [year, setyear] = useState(() => {
    let y = new Date();
    let currentTime = y.getFullYear();
    return currentTime;
  });
  let [month, setMonth] = useState(() => {
    let m = new Date();
    let currentMonth = m.getMonth() + 1;
    return currentMonth;
  });

  let [days, setDays] = useState(() => {
    let day = new Date();
    let currentDay = day.getDate();
    return currentDay;
  });

  // Time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = format(currentTime, "hh:mm:ss a");

  return (
    <section className="new_src">
      <div className="new_timeAndHistory">
        <h1> {formattedTime} </h1>
        <h1 className="new_history">
          Today's date: {days}/{month}/{year}
        </h1>
      </div>

      <div
        style={{ display: displayNone ? "flex" : "none" }}
        onClick={removeItem}
        className="new_alert"
      >
        <div className="new_first_alert">Enter</div>
        <div className="new_plus">+</div>
        <div className="new_secound_alert">+</div>
      </div>
      <input
        onChange={enterTask}
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyPressDelete}
        value={task}
        type="text"
        placeholder="Add Task !"
      />
      <button className="new_add" onClick={addTask}>
        Add Task
      </button>

      <div>
        {tasksList.map((taskItem, index) => (
          <div className="new_delete" key={index}>
            {taskItem}
            <button
              className="new_delete_btn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default NewComponent;
