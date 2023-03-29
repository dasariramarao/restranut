import React from 'react';
import { BrowserRouter,Router,Route } from 'react-router-dom';
import Home from './Home';
import Order from './Order';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Router>
        <Route path="/Home" element={<Home />}/>
         <Route path="/Order" element={<Order />}/>
         </Router>
         </BrowserRouter>
    </div>
  )
}

export default App