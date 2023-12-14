import react from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Header/Header";
import Routerpost from '../Pages/Posts/Routerpost';
const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/*" element={<Routerpost />} />
            </Routes>
        </BrowserRouter>
      );
}
 
export default App;