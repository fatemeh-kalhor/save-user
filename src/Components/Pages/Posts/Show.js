import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios  from "axios";
import Swal from "sweetalert2";
const Show = () => {
    const {id}=useParams()
    const [post, setpost] = useState(null)
    const navigate=useNavigate()
    const fetchpost = async () => {
        try {
            const data = await fetch(`http://localhost:3004/User/${id}`)
            const res=await data.json()
            setpost(res)
        } catch (error) {
            console.log(error.message);
        }
    }
    const comebackposts = () => {
        navigate("/posts")
    }
    const editpost = () => {
        navigate(`/posts/edit/${id}`) 
    }
    const deletepost = async () => {



        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success mx-1",
              cancelButton: "btn btn-danger mx-1"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                
              
                const res =  axios.delete(`http://localhost:3004/User/${id}`, { method: "delete" })
                console.log(res.data);
                navigate("/posts")
                
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });

    }
    useEffect(() => {
        fetchpost()
    },[])
    return (  
        post && (
            <div className="card mx-2 my-2" style={{ width: "18rem" }}>
        <div className="card-header bg-dark text-white">
           {post.FirstName}
        </div>
        <ul className="list-group list-group-flush bg-dark text-white">
            <li className="list-group-item bg-dark text-white">{ post.LastName}</li>
            <li className="list-group-item bg-dark text-white"><img src={post.Photo} alt="" className="img-fluid"/></li>
                    <li className="list-group-item bg-dark text-white">
                        <button className="btn btn-success btn-sm mx-2 text-capitalize" onClick={comebackposts}>come back</button>
                        <button className="btn btn-danger btn-sm mx-2 text-capitalize" onClick={deletepost}>delete</button>
                        {/* <button  className="btn btn-warning btn-sm mx-2 text-capitalize" onClick={editpost}>edit</button> */}
                    </li>
                    
        </ul>
    </div>
        )
    );
}
 
export default Show;