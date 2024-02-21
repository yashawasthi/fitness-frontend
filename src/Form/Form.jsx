import React, { useContext, useEffect, useState } from 'react'
import "./Form.css"
import { getRandomColor } from '../Utils/Utils';
import { Button } from '@mui/material';
import axios from 'axios';
import { ApiContext } from '../MyContext';
const Form = () => {
  const [inputColor, setInputColor] = useState("");
  const [date,setDate]=useState('');
  const [weight,setWeight]=useState('');
  const {addEntry}=useContext(ApiContext);
 




  function handleSubmit(event)
  {
    event.preventDefault();
    if(date==0 || weight==0)
    {
        alert("Please enter valid input");
        setDate('');
        setWeight('');
    }
    else
    {
        addEntry(date,weight);
        setDate('');
        setWeight('');
    }
  }


  useEffect(() => {
    setInputColor(getRandomColor());
  }, []);

  return (
    <form className="form" onSubmit={(e)=>{handleSubmit(e)}}>
    <div className="input-container">
      <div className="input-date-container">
      <input
      className="input-date"
      type="date"
      style={{ color: `${inputColor}` }}
      placeholder="DD/MM/YYYY"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
    />
      </div>
      <div className="input-weight-container">
      <input
      className="input-weight"
      type="text"
      style={{ color: `${inputColor}` }}
      placeholder="Ex. 64 (kg)"
      value={weight}
      onChange={(e)=>setWeight(e.target.value)}
    />
      </div>
    </div>
    <div className="button-holder-submit">
      <Button variant="contained" color="success" type='submit'>
        Submit
      </Button>
    </div>
  </form>
  )
}

export default Form