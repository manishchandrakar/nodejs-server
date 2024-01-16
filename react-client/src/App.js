// react-client/src/App.js

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NewProductForm from './components/newProduct/newPrduct.js'

// import ItemComponent from './components/ItemComponent';
import ItemDetails from "./components/ItemDetails.js"
// import DeleteProduct from './components/DeleteProduct/DeleteProduct';
import UpdateDeleteProduct from './components/UpdateProduct/EditProduct.js';
import Footer from './components/Footer/Footer.js';



function App() {
  return (
    <>
    <Routes>
    < Route path= "/" element={<ItemDetails/>} />
    < Route path= "/create" element={<NewProductForm/>} />
    < Route path= "/edit/:productId" element={< UpdateDeleteProduct/>} />
    {/* < Route path= "/delete" element={<DeleteProduct/>} /> */}
    
    
  </Routes>
  <Footer />
    </>
  );
}

export default App;
