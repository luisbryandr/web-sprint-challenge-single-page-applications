import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'

function Pizza (){
  return <h1>Live your best life, create your ideal pizza below</h1>
}
function Home (){
  return <h1>Back at Home eh?</h1>
}
const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <BrowserRouter>
        <Link to= '/'>Home</Link>
        <Link to= '/pizza'>Pizza?</Link>

        <Route exact path ='/' component={Home} />
        <Route path='/pizza' component={Pizza} />
        
      </BrowserRouter>
      
    </>
  );
};
export default App;
