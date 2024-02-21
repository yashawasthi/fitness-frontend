import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./Row.css";
import { getRandomColor } from "../Utils/Utils";
import { ApiContext } from "../MyContext";

const Row = ({ date, weight,id }) => {

  const [color, setColor] = useState("");
  const {deleteEntry} = useContext(ApiContext);

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  const parsedDate = new Date(date);
  const dateOfMonth = parsedDate.getUTCDate();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();

  const formattedDate = `${dateOfMonth.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;


  function handleEdit()
  {
  }
  function handleDelete()
  {

    deleteEntry(id);
  }

  return (
    <div className="row" style={{ color: `${color}` }}>
      <div className="date-holder">{formattedDate}</div>
      <div className="weight-holder">{weight}</div>
      <div className="button-holder">
        <Button className='' variant="outlined" color="success" onClick={()=>{handleEdit()}}>
          Edit
        </Button>
        <Button className='' variant="outlined" color="error" onClick={()=>{handleDelete()}}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Row;


