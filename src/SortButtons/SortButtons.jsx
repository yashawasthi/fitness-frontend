import React, { useContext } from "react";
import "./SortButtons.css";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ApiContext } from "../MyContext";

const SortButtons = () => {
  const {
    entries,
    sortByDate,
    setSortByDate,
    sortByWeight,
    setSortByWeight,
    sortTechnique,
    setSortTechnique,
    setData,
  } = useContext(ApiContext);

  return (
    <div className="sort-buttons">
      <>
        {sortByDate === "Date_Ascending" ? (
          <Button
            startIcon={<KeyboardArrowUpIcon />}
            className="sort-button"
            sx={{
              backgroundColor: "rgb(219, 85, 245)",
              color: "rgb(255, 255, 255)",
              minWidth: "10rem",
              maxWidth: "10rem",
              minHeight: "2rem",
              maxHeight: "2rem",
              fontSize: "0.7rem",
              "&:hover": {
                backgroundColor: "rgb(112, 35, 128)",
                color: "rgb(255, 255, 255)",
              },
            }}
            onClick={() => {
              debugger;
              console.log("Button 1 clicked");
              if (sortTechnique === "sortByWeight") {
                setSortTechnique("sortByDate");
              }
              setSortByDate("Date_Descending");
              setData(entries);
            }}
          >
            Descending
          </Button>
        ) : (
          <Button
            startIcon={<KeyboardArrowDownIcon />}
            className="sort-button"
            sx={{
              backgroundColor: "rgb(219, 85, 245)",
              color: "rgb(255, 255, 255)",
              minWidth: "10rem",
              maxWidth: "10rem",
              minHeight: "2rem",
              maxHeight: "2rem",
              fontSize: "0.7rem",
              "&:hover": {
                backgroundColor: "rgb(112, 35, 128)",
                color: "rgb(255, 255, 255)",
              },
            }}
            onClick={() => {
              debugger;
              console.log("Button 2 clicked");
              if (sortTechnique === "sortByWeight") {
                setSortTechnique("sortByDate");
              }
              setSortByDate("Date_Ascending");
              setData(entries);
            }}
          >
           Ascending
          </Button>
        )}
      </>
      <>
        {sortByWeight === "Weight_Ascending" ? (
          <Button
            startIcon={<KeyboardArrowUpIcon />}
            className="sort-button"
            sx={{
              backgroundColor: "rgb(219, 85, 245)",
              color: "rgb(255, 255, 255)",
              minWidth: "10rem",
              maxWidth: "10rem",
              minHeight: "2rem",
              maxHeight: "2rem",
              fontSize: "0.7rem",
              "&:hover": {
                backgroundColor: "rgb(112, 35, 128)",
                color: "rgb(255, 255, 255)",
              },
            }}
            onClick={() => {
              debugger;
              console.log("Button 3 clicked");
              if (sortTechnique === "sortByDate") {
                setSortTechnique("sortByWeight");
              }
              setSortByWeight("Weight_Descending");
              setData(entries);
            }}
          >
            Descending
          </Button>
        ) : (
          <Button
            startIcon={<KeyboardArrowDownIcon />}
            className="sort-button"
            sx={{
              backgroundColor: "rgb(219, 85, 245)",
              color: "rgb(255, 255, 255)",
              minWidth: "10rem",
              maxWidth: "10rem",
              minHeight: "2rem",
              maxHeight: "2rem",
              fontSize: "0.7rem",
              "&:hover": {
                backgroundColor: "rgb(112, 35, 128)",
                color: "rgb(255, 255, 255)",
              },
            }}
            onClick={() => {
              debugger;
              console.log("Button 4 clicked");
              if (sortTechnique === "sortByDate") {
                setSortTechnique("sortByWeight");
              }
              setSortByWeight("Weight_Ascending");
              setData(entries);
            }}
          >
            Ascending
          </Button>
        )}
      </>

      <button className="sort-button" id="hidden-button">
        Sort By Weight
      </button>
    </div>
  );
};

export default SortButtons;
