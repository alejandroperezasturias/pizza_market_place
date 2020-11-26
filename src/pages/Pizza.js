import React from 'react'
import Nav from "../Components/Nav"
import Pizzas from "../Components/Pizzas_Classics"
import Pizzas_Veggie from "../Components/Pizzas_Veggie"

export default function Pizza() {
    return (
        <div className="">
            <Nav />      
            <Pizzas />  
            <Pizzas_Veggie/>
        </div>
    )
}
