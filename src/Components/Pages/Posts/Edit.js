import { useState } from "react";
import axios  from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Update from "./Update";
const Edit = () => {

    const { id } = useParams()
    const [post,setpost]=useState(null)
    const fetchpost = async () => {
        try {
            const res = await axios.get(`http://localhost:3004/User//${id}`)
            setpost(res.data)

        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
    fetchpost()
    },[])
    const navigate=useNavigate()
    return ( 
        <div className="col-6 offset-3 bg-dark text-white mt-2 p-5">
  
            {post && <Update post={post} />} 
        </div>
     );
}
 
export default Edit;