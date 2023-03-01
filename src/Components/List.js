import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";
import "./Stylelist.css";


const List = () => {
  const list = useSelector((state) => state.Reducer.listTask);
  const [radioValue, setRadioValue] = useState("All");

  const radios = [
    { name: "ShowAll", value: "All" },
    { name: "ShowDone", value: "Done" },
    { name: "Show UnDone", value: "UnDone" },
  ];

  return (
    <div>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="success"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <div className="cont">
        {radioValue === "Done"
          ? list
              .filter((el) => el.isDone === true)
              .map((el, index) => (
                <TodoList  task={el} number={index} key={el.id} />
              ))
          : radioValue === "UnDone"
          ? list
              .filter((el) => el.isDone === false)
              .map((el, index) => (
                <TodoList task={el} number={index} key={el.id} />
              ))
          : radioValue === "All"
          ? list.map((el, index) => (
              <TodoList task={el} number={index} key={el.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default List;
