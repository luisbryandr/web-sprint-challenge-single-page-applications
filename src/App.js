import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'

function Pizza (){
  return (
  <div>
    <h1>Live your best life!</h1>
      <h3> Create your ideal pizza below</h3>
    <form id='pizza-form'>
      <label htmlFor='name-input'>Coder's Name</label>
      <input
        maxLength='16'
        placeholder='Your name goes here'
        id='name-input'
        name='fname'
        type='text'
      /><br />
      <label htmlFor='size-dropdown'>Size of your Pie!</label>
      <select id='size-dropdown'>
        <option value='1'>Personal / Small</option>
        <option value='2'>For Two / Medium</option>
        <option value='3'>To Share / Large</option>
      </select><br />

      <label>Pizza Toppings
        <input
          type='checkbox'
          id='toppings-checklist'
          name='toppings'
          />
          <input
          type='checkbox'
          id='toppings-checklist'
          name='pineapple'/>

      </label><br />


      <label htmlFor='special-text'>Got a particular way you like your pie?</label>
      <input
      type='text'
      id='special-text'
      maxLength='75'
      placeholder='Special instructions go here'
      name='specialinstructions'
      /><br />
      <input type='submit'/>
      <button id='order-button'>Add to Order</button>
    </form>
  </div>
  )

   //revisit this checkbox - you need a checklist for toppings!
   
}
function Home (){
  return <h1>Back at Home, eh?</h1>
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
