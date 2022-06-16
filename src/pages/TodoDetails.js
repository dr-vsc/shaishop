/* eslint-disable react-hooks/exhaustive-deps */

import {  useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader/Loader";
// import TodoConntext from "../contexts/TodoConntext";


export default function TodoDetails(){
    const initialState ={
        image: '',
        title: ' Loading.. ',
        description: ' The Data From Server is not here yet... ',
        price: '$$$$$$$$$$$$$'
    }
    const {id}=useParams();
    const [todoDetails,setTodoDetails]=useState(initialState)
    const [isLoding,setLoding]=useState(true);

useEffect(()=>{
//   setLoding(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((todo)=> {
        setTodoDetails(todo)
        setLoding(false);
    })
    .catch(err => {
        setLoding(false)
        console.log(err)
    })
},[]);
console.log(todoDetails);
console.log(id);

return<div key={id} id={id} className="product-card">
    { isLoding ? <Loader/> :
 
            <div>
            <img alt={"alt"} src={todoDetails.image} />
            <div className="product-info">
                <h5>{todoDetails.title}</h5>
                <h6>{todoDetails.description}</h6>
                <h6>{todoDetails.price}</h6>
            </div>
            </div>}
</div>
}
