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
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken'
  }, {
    id: 2,
    name: 'Plain Pork',
    serving: 3,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Eat Pork'
  }
]

export default App;

