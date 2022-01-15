import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe(props) {
    const {
        name,
        cookTime,
        serving,
        instructions,
        ingredients,
    } = props
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>

                <span>CookTime:</span>
                <span>{cookTime}</span>
            </div>

            <div>
                <span>Servings:</span>
                <span>{serving}</span>
            </div>

            <div>
                <span>Instructions:</span>
                <div>
                    {instructions}
                </div>
            </div>

            <div>
                <span>Ingredients:</span>
                <div>
                    <IngredientList ingredients={ingredients}/>
                </div>
            </div>
        </div>
    )
}
