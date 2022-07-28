import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDati = () => {
    const {id}=useParams();
    const [meal,setMeal]=useState([]);
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        
        fetch(url)
        .then(res=>res.json())
        .then(data=> setMeal(data.meals))

    },[meal])
    return (
        <div>
            <h2>welcomto Meal db Datils{id}</h2>
            <p>{meal.meals?.strMeal}</p>

        </div>
    );
};

export default MealDati;