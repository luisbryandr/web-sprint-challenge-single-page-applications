import React, {useState} from 'react';



export default function Pizza (props){
    const [formInput, setFormInput] = useState({
      name: '',
      size: '',
      pineapple: false,
      tomato: false,
      spinach: false,
      love: false,
      special: '',
    })
    const onInputChange = event => {
      setFormInput({
        ...formInput,[event.target.name]: event.target.value,
      })
    }

    return (
    <div>
        <div>
          <h1>Live your best life!</h1>
            <img src='../assets/pizza'/>
            <h3> Create your ideal pizza below</h3>
        </div>
      <form id='pizza-form'>
        <label htmlFor='name-input'>Coder's Name</label>
        <input
          maxLength='16'
          placeholder='Your name goes here'
          id='name-input'
          name='name'
          type='text'
          onChange={onInputChange}
        /><br />
        <label htmlFor='size-dropdown'>Size of your Pie!</label>
        <select id='size-dropdown'name='size'onChange={onInputChange}>
          <option value='1'>Personal / Small</option>
          <option value='2'>For Two / Medium</option>
          <option value='3'>To Share / Large</option>
        </select><br />
  
        <h4>Pizza Toppings</h4>
        <label>Pineapple
          <input
            type='checkbox'
            id='toppings-checklist'
            name='pineapple'
            onChange={onInputChange}
            />
        </label>
        <label>Tomato
            <input
            type='checkbox'
            id='toppings-checklist'
            name='tomato'
            onChange={onInputChange}
            />
  
        </label><br />
  
  
        <label htmlFor='special-text'>Got a particular way you like your pie?</label>
        <input
        type='text'
        id='special-text'
        maxLength='75'
        placeholder='Special instructions go here'
        name='special'
        onChange={onInputChange}
        /><br />
        <button id='order-button'>Add to Order</button>
      </form>
    </div>
    )
  
     //revisit this checkbox - you need a checklist for toppings!
     
  }