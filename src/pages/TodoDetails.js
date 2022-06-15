/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
// import TodoConntext from "../contexts/TodoConntext";


export default function TodoDetails(){
    const {id}=useParams();
    const {todoDetails,setTodoDetails}=useState([])
    // const {addToCart,removeCart, setCount,count}=useContext(TodoConntext);

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((todoDetails)=>
    setTodoDetails(todoDetails));
},[]);

console.log(todoDetails);

return(
    <div key={id} className="product-card">
{/*  
            <img alt={"alt"} src={todoDetails.image} />
            <div className="product-info">
            <h5>{todoDetails.title}</h5>
            <h6>{todoDetails.price}</h6>
        </div> */}
</div>
)}