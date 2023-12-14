import Create from "./Create";
import Edit from "./Edit";
import Posts from "./Posts";
import Show from "./Show";
import {  Route, Routes } from "react-router-dom";

const Routerpost = () => {
    return ( 
        
        <Routes>
            
            <Route path="/" element={<Posts />} />
            <Route path="/:id" element={<Show />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
        </Routes>
     );
}
 
export default Routerpost;