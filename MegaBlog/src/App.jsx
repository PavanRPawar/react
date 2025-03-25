import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);       // For Create React App
  console.log(import.meta.env.VITE_APPWRITE_URL); // For Vite App
  
  return (
    <>
      <h1>Hello React</h1>
    </>
  )
}

export default App
