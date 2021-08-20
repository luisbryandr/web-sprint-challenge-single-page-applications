import React, {useState} from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Pizza from "./PizzaForm";


function Home (){
  return <h1>Back at Home, eh?</h1>
}
const App = () => {

  const [input, setInput] = useState('');

  const handleChange = event =>{
    setInput(event.target.value);
  };
  const handleSubmit = () => {
    console.log(input);
  };
  return (
    <>
      <h1>Lambda Eats</h1>
      <BrowserRouter>
        <Link to= '/'>Home </Link>
        <Link to= '/pizza'> Pizza?</Link>

        <Route exact path ='/' component={Home} />
        <Route path='/pizza' component={Pizza} />

      </BrowserRouter>
      
    </>
  );
};
export default App;
