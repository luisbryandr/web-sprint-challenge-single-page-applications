import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'

function Pizza (){
  return (
  <div>
    <h1>Live your best life, create your ideal pizza below</h1>
    <form id='pizza-form'>
      <label htmlFor='name-input'>Coder's Name</label>
      <input
        maxLength='16'
        placeholder='Your name goes here'
        id='name-input'
        name='fname'
        type='text'
      /><br />
      <select>
        <option>xxxxx</option>
        <option>yyyy</option>
        <option>zzzz</option>

      </select>
    </form>
  </div>
  )
}
function Home (){
  return <h1>Back at Home eh?</h1>
}
const App = () => {
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
