import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"
import load from "./file/load.gif";
import {SearchUser} from "./SearchUser";
import "./GithubRepository.css";
import {ItemsPerPage} from "./ItemsPerPage";
import {SortingUser} from "./SortingUser";
import {DisplayUsers} from "./DisplayUsers";

const GithubRepository = () => {

    const [loading, setLoading] = useState(true);
    const [users,setUsers] = useState([]);
    const [query, setQuery] = useState("react");
    const [page, setPage]= useState(1);
    const [perPage, setPerPage]= useState(5);
    const [totalUser, setTotalUser]= useState(0);
    const [order, setOrder]= useState("asc");
    const getUsersData= (q,perPage)=>{

        // const total= axios.get(`https://api.github.com/search/users?q=${query}`).then(res=>{
        //     setTotalUser(res.data.items.length)
        //     console.log(res,"tot")
        // })

        const githubUsers=  axios("https://api.github.com/search/users",{
            method: "GET",
            params: {
                q,
                per_page:perPage,
                page,
                sort:"updated",
                order:order
            }
        }).then((res)=>{
            console.log(res.data.items,order,"res");
            setTotalUser(res.data.total_count)
            setLoading(false);
            setUsers(res.data.items)
        })

    }

    useEffect(()=>{
        getUsersData(query,perPage)
    },[query,page,perPage,order])

    const handleSearch=(val)=>{
        setQuery(val)
        setPage(1)
    }
    

  return (
    <div>
        <SearchUser handleSearch={handleSearch}/>
        {loading ? <div><img src= {load} alt="" /></div> : null}
        <div style={{display:"flex", justifyContent:"space-between", width:"30%",margin:"auto", alignItems: "center"}}>
        <SortingUser setOrder={setOrder}/>
        <ItemsPerPage setPerPage={setPerPage}/>
        </div>
        {users.map((elem)=>{
            return <DisplayUsers val= {elem} key={elem.id}/>
        })}
         <div>
            <div className="btnDiv">
                <button className="prevBtn" disabled={page === 1} onClick={() => setPage(page - 1)}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg> Prev</button>
                <button className="nextBtn" disabled={page === Math.ceil(totalUser/6)} onClick={() => setPage(page + 1)}>Next<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>
            </div>
            <div>
                <h6>Page {page}/{Math.ceil(totalUser/perPage)}</h6>
            </div>
        </div>
    </div>
  )
}


export default GithubRepository