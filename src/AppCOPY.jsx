import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './pages/Details';
import Categories from './pages/Categories';
import Products from './pages/Products';
const App = () => {
  return (
    <BrowserRouter>
    <div className="page">
    <Header />
    <Routes>
     <Route path="/" element={< Home />} />
     <Route path="/Products" element={<Products />} />
     <Route path="/Categories" element={<Categories />}>
     <Route path="populars" element={ <h1>Popular Novels Page</h1>
     }/>
     <Route path='bestsellers' element={ <h1>Best Sellers Page</h1>}/>
     <Route path='romantics' element={ <h1>Romantics Page</h1>}/>
     </Route>
     <Route path="*" element={<NotFound/>} />
     <Route path="/Details/:id" element={<Details />}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App