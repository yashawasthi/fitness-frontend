import React, { createContext, useState } from "react";
import axios from "axios";
import { OrderDatesInAscending, OrderDatesInDescending, OrderWeightsInAscending, OrderWeightsInDescending } from "./Utils/Utils";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortByDate, setSortByDate] = useState("Date_Descending");
  const [sortByWeight, setSortByWeight] = useState("Weight_Descending");
  const [sortTechnique, setSortTechnique] = useState("sortByDate");

  const getEntries = async () => {
    try {
      await axios
        .get("https://fitness-backend-eta.vercel.app/entries")
        .then((response) => {
          return response.data.data;
        })
        .then((response) => {

          setData(response);

        })
        .then(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  const addEntry = async (date, weight) => {
    try {
      setIsLoading(true);
      const response = await axios
        .post("https://fitness-backend-eta.vercel.app/saveEntry", {
          date,
          weight,
        })
        .then((response) => {
          return response.data;
        })
        .then((response) => {
          setData([...entries, response.data]);
        })
        .then(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  const updateEntry = async (id, updatedEntry) => {
    try {
      const response = await axios.patch(
        `https://fitness-backend-eta.vercel.app/${id}`,
        updatedEntry
      );
      const updatedEntries = entries.map((entry) =>
        entry.id === id ? response.data : entry
      );
      setEntries(updatedEntries);
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  const deleteEntry = async (id) => {
    try {
      setIsLoading(true);
      await axios
        .delete(`https://fitness-backend-eta.vercel.app/entries/${id}`, {
          id,
        })
        .then(() => {
          const updatedEntries = entries.filter((entry) => entry._id != id);
          setData(updatedEntries);
        })
        .then(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  const setData=(response)=>{
    if(sortTechnique==="sortByDate")
          {
            if(sortByDate==="Date_Ascending")
            {
              setEntries(OrderDatesInAscending(response));
            }
            else
            {
              setEntries(OrderDatesInDescending(response));
            }
          }
          else if(sortTechnique==="sortByWeight")
          {
            if(sortByWeight==="Weight_Ascending")
            {
              setEntries(OrderWeightsInAscending(response));
            }
            else
            {
              setEntries(OrderWeightsInDescending(response));
            }
          }
  }

  return (
    <ApiContext.Provider
      value={{
        entries,
        getEntries,
        addEntry,
        updateEntry,
        deleteEntry,
        isLoading,
        sortByDate,
        setSortByDate,
        sortByWeight,
        setSortByWeight,
        sortTechnique,
        setSortTechnique,
        setData
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
