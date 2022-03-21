import React from 'react';
import { addToDo, removeFormDb } from '../utilities/Utillities';
import "./Cosmetic.css";

const Cosmetic = (props) => {
    const {age, id , name}=props.cosmetic;

    const toDoCart=()=>{
        addToDo(id)
    }
    const removeCart=()=>{
        removeFormDb(id)
    }
    return (
        <div className='box'>
            <h1>Name:{name}</h1>
            <p>Only Age:{age}</p>
            <p><small>Id:{id}</small></p>
            <button onClick={()=>toDoCart(id)}>Add Cart</button>
            <button onClick={()=>removeCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;