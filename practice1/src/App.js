import React, { useState} from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'


export const ThemeContext = React.createContext()
function App() {
  // With absence of div it will fail to show the output JSX will get confused what to show in the outputArea instead
  
  //******/ With Div

  // return (
  //   <div>     
  // <h1>
  //   Hello World    
  // </h1>
  // <h3>Its me.</h3>
  //  </div>
  // )

  // To display the output just use JSX syntax just use the empty tags 
  //************************/ Without Div

  // return (
  //   <>
  //   <h1>Hello World</h1>
  //   <h3>Its me.</h3>
  //   </>
  // )
  console.log("Rendering")
  const [theme, setTheme] = useState('red')

  return (
    <ThemeContext.Provider value = {{ backgroundColor: theme }}>
    Counter
   < Counter initialCount = { 0 } />
   Counter Hooks
   <CounterHooks initialCount = {0} />
   <button onClick={() => setTheme(prevTheme => {
     return prevTheme ==='red' ? 'blue' : 'red'})}>Toggle Theme</button>
   </ThemeContext.Provider>
  )
}

export default App;

