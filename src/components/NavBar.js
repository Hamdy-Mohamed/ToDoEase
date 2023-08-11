import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function NavBar() {
  let [newPageName, setNewPageName] = useState("");
  let [styling, setStyling] = useState({ display: "none" });

  // Load stored input value from local storage on component mount
  React.useEffect(() => {
    const storedValue = localStorage.getItem("newPageName");
    if (storedValue) {
      setNewPageName(storedValue);
      setStyling({ display: "flex" });
    }
  }, []);

  let NameEvent = (e) => {
    const value = e.target.value;
    setNewPageName(value);

    if (value.length === 0) {
      setStyling({ display: "none" });
    } else if (value.length > 10) {
      setStyling({ display: "none" });
      toast.error("The name you entered is longer than 10 characters", {
        position: "bottom-left",
      });
    } else {
      setStyling({ display: "flex" });
    }
    localStorage.setItem("newPageName", value);
  };

  let PageCreatedAlert = (event) => {
    let eventValue = event.target.value;
    if (eventValue.length > 0) {
      toast.success("Page is created !Enjoy", {
        position: "bottom-left",
      });
    }
  };
  return (
    <>
      <ul>
        <input
          onBlur={PageCreatedAlert}
          onChange={NameEvent}
          className="Nav_input"
          type="text"
          placeholder="Create a new List, (Select List Name)"
        />
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li style={styling} className="new">
          <Link to={"/NewComponent"}> {newPageName} </Link>
        </li>
      </ul>
      <ToastContainer />
    </>
  );
}

export default NavBar;
