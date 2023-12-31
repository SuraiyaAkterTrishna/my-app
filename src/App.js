import './App.css';

const nayok = {
  padding: '20px',
  backgroundColor: 'blue',
  border: '5px solid red',
  borderRadius: '20px',
  color: 'white',
  margin: '20px 200px',
}

const alignment = {
  textAlign: 'center',
}
const singers = [
  {name: 'Dr Mahfuzur Rahman', job: 'Ghumte parina Sararat dhore'}, 
  {name: 'Eva Rahman', job: 'Ar koto rat aka thakbo'}, 
  {name: 'Momotaz Mohol', job: 'Morar kokil'}, 
  {name: 'Hero Alom', job: 'O baby O baby'},
]
function App() {
  const nayoks = ['Rubel' , 'Manna', 'Bapparaz', 'Sakil Khan'];
  return(
    <>

    {
      nayoks.map(nayok => <li>Name: {nayok}</li>)
    }
    {
      singers.map(singer => <Person name = {singer.name}></Person>)
    }
    {/* {
      nayoks.map(nayok => <Person name = {nayok}></Person>)
    } */}

    
      {/* <Person name = {nayoks[0]} nayika = 'Munmun'></Person>
      <Person name = {nayoks[1]} nayika = 'Mala'></Person>
      <Person name = {nayoks[2]} nayika = 'Kopila'></Person> */}
      <h1 style={{textAlign : 'center'}}>Hey, This is an amazing morning</h1>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Food name = 'Hilsa Fish' price = '200 tk' quantity = '2' ></Food>
      <Food name = 'Rupchanda Fish' price = '100 tk' quantity = '5' ></Food>
      <Food name = 'Rohu Fish' price = '60 tk' quantity = '3' ></Food>
      <Food name = 'Tilapia Fish' price = '20 tk' quantity = '1' ></Food>

    </>
  )
  
}

// create component 
function Person(props){
  console.log(props);
  return (
  <div className='person'>
  <h1 >Nayok : {props.name}</h1>
  <h2>Nayika: {props.nayika}</h2>
  <p>Album: 120+</p>
  </div>
  )
}

function Nayok(){
  return(
    <div style={nayok}>
      <h1>Movie: 100% Love</h1>
      <p>Main Actor: Zeet</p>
      <p>age: 50</p>
    </div>
  )
}

function Food (props) {
  return (
    <div className='food'>
      <h1 style = {alignment}>Best Item: {props.name}</h1>
      <p style = {alignment}>Price: {props.price}</p>
      <p style = {alignment}>Minimum Order: {props.quantity}</p>
    </div>
  )
}

export default App;
