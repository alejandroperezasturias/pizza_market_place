import React from 'react'
import Pizzas from "../Components/Pizzas_Classics"
import Pizzas_Veggie from "../Components/Pizzas_Veggie"


export default function Pizza() {
    return (
        <div>
            <Pizzas />  
            <Pizzas_Veggie/>
        </div>
    )
}
