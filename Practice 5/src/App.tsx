
import './App.css'

interface AppProps {
  header: string,
  extraText?: string
}

function App({ header, extraText = "default Text" }: AppProps) {

  return (
    <div className="App">
      <h1>{header}</h1>
      {extraText && <p> {extraText}</p>}
    </div >
  )
}

export default App
