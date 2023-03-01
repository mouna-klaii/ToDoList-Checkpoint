import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions/Action";
import "./Stylelist.css";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handelAdd = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(addTask({ id: Math.random(), text: input, isDone: false }));
    } else {
      alert("cannot add new Task");
    }
    setInput("");
  };

  return (
    <div>
      <Form>
        <input
          className="sbar"
          type="text"
          placeholder="Add new ToDo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="m-2" size="sm" variant="primary" type="submit" onClick={handelAdd}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default Input;
