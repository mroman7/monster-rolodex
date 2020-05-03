import React from 'react';
import './search-box.style.css';

//props are destructured for easy to use 
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className="search"
        type="Search" 
        placeholder = {placeholder}
        onChange= { handleChange } 
    />
)