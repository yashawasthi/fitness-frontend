import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Row from "../Row/Row";
import axios from "axios";
import Loader from "../Loader/Loader";
import Form from "../Form/Form";
import { ApiContext } from "../MyContext";

function App() {
  const {entries, getEntries,isLoading} =useContext(ApiContext);

  useEffect(() => {
    getEntries();
  }, []);


  return (
    <div className="app-container">
      {isLoading==false ? (
        <div className="container">
          <div className="content-container">
            <Form />
            <div>
              {entries.map((value) => {

                // console.table({
                //   key:value._id,
                //   weight:value.weight,
                //   date:value.date,
                //   id:value._id
                // });

                return (
                  <Row
                    key={value._id}
                    weight={value.weight}
                    date={value.date}
                    id={value._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
