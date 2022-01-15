import React from 'react'
import RecipeList from './RecipeList';

export const ThemeContext = React.createContext()
function App() {
  return (
    <RecipeList recipes={sampleRecipes} />
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    serving: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id:1,
        name:'Chicken',
        amount: '3 Pounds'
      }, 
      {
        id:2,
        name:'Salt',
        amount: '1 Tbs'
      }
    ]
  }, {
    id: 2,
    name: 'Plain Pork',
    serving: 3,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Eat Pork',
    ingredients: [
      {
        id:1,
        name:'Pork',
        amount: '3 Pounds'
      }, 
      {
        id:2,
        name:'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;

