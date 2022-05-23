import React from 'react';
import { useState } from 'react';

export const SearchUser= ({handleSearch})=>{
    const [text, setText] = useState("");

    return(
        <div className="searchDiv">
            <input className="searchBox" type="text" placeholder='search users' onChange={(e)=>{setText(e.target.value)}} />
            <button className="searchBtn" onClick={()=>{handleSearch(text)}}>Search</button>
        </div>
    )
}