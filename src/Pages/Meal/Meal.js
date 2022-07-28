import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'
const Meal = (props) => {
    const{strMeal,strMealThumb,idMeal}=props.meal;
    return (
        <div className='image'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
        
            <Link to={`/restrorant/`+idMeal}>click me</Link>
        </div>
    );
};

export default Meal;