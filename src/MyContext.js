import React, { createContext, useState } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [isLoading,setIsLoading]=useState(true);

  const getEntries = async () => {
    try {
        await axios
        .get("https://fitness-backend-eta.vercel.app/entries")
        .then((response) => {
          return response.data.data;
        })
        .then((response) => {
          setEntries(response);
        })
        .then(()=>{
          setIsLoading(false);
        })
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const addEntry = async (date,weight) => {
    try {
        setIsLoading(true);
        const response=await axios.post('https://fitness-backend-eta.vercel.app/saveEntry',{
            date,
            weight
        }).then((response)=>{
          return response.data;
        })
        .then((response)=>{
          setEntries([...entries, response.data]);
        })
        .then(()=>{
          setIsLoading(false);
        })
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
      setIsLoading(true);
        await axios.delete(`https://fitness-backend-eta.vercel.app/entries/${id}`,{
            id
          }).then(()=>{
            const updatedEntries = entries.filter(entry => entry._id != id);
            setEntries(updatedEntries);
          })
          .then(()=>{
            setIsLoading(false);
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
        deleteEntry,
        isLoading
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
