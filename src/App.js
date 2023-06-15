import './App.css';

function App() {
  
  return(
    <>
      {/* use component  */}
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h1>Hey, This is an amazing morning</h1>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
    </>
  )
  
}

// create component 
function Person(){
  return (
  <>
  <h1>Mahfuzur Rahman</h1>
  <h2>Singer</h2>
  <p>Album: 120+</p>
  </>
  )
}

function Nayok(){
  return(
    <>
      <h1>Movie: 100% Love</h1>
      <p>Main Actor: Zeet</p>
      <p>age: 50</p>
    </>
  )
}

export default App;
