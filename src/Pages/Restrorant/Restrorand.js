import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Res.css'
const Restrorand = () => {
    const[search,setSearch]=useState('')
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> setMeals(data.meals))
    },[search])

    const searchfood= e=>{
        setSearch(e.target.value);
    }
    return (
        <div style={{textAlign:'center'}}>
            <h1>Search Your favarit food {meals.length}</h1>
            <br />
            <input onChange={searchfood} type="text" placeholder='search food' />
            <div className='grid'>
                {
                    meals.map(meal=> <Meal meal={meal}
                    key={meal.id}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restrorand;