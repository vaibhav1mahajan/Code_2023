import React, { useState } from 'react';
// import useDebounce from './useDebounce';
import './App.css'
import { useEffect } from 'react';

function useTodo(value,delay){
  const [debouncedValue,setDebouncedValue] = useState(value);
  useEffect(()=>{
    const setTimoutId = setTimeout(()=>{
      setDebouncedValue(value);
    },delay)
    return () => clearTimeout(setTimoutId);
  },[value]);
  return debouncedValue;
}
const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useTodo(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <div>
      <div>
        Debounced value {debouncedValue}
      </div>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
      />
      </div>
  );
};

export default SearchBar;
