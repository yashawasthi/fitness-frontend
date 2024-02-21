import React, { createContext, useState } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    try {
        await axios
        .get("https://fitness-backend-eta.vercel.app/entries")
        .then((response) => {
          return response.data.data;
        })
        .then((response) => {
          setEntries(response);
        });
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const addEntry = async (date,weight) => {
    try {
        const response=await axios.post('https://fitness-backend-eta.vercel.app/saveEntry',{
            date,
            weight
        }).then((response)=>{
          return response.data;
        })
        console.log(response)
      setEntries([...entries, response.data]);
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  const updateEntry = async (id, updatedEntry) => {
    try {
      const response = await axios.patch(`https://fitness-backend-eta.vercel.app/${id}`, updatedEntry);
      const updatedEntries = entries.map(entry => 
        entry.id === id ? response.data : entry
      );
      setEntries(updatedEntries);
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  const deleteEntry = async (id) => {
    try {
        await axios.delete(`https://fitness-backend-eta.vercel.app/entries/${id}`,{
            id
          }).then(()=>{

            const updatedEntries = entries.filter(entry => entry._id != id);
            console.log(updatedEntries)
            setEntries(updatedEntries);
          })
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        entries,
        getEntries,
        addEntry,
        updateEntry,
        deleteEntry
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
