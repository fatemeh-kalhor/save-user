
import { useCallback,useState } from "react";
import axios  from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Webcam from "react-webcam";

const Update = ({ post }) => {
    
    const [FirstName, setFirstName] = useState([])
    const [LastName, setLastName] = useState([])
    const [imgSrc, setImgSrc] = useState([]);
    
    const [getphoto, setgetphoto] = useState(null);
    

    const Photoref = useRef(null)

    const navigate = useNavigate()

    const update =async() => {
        try {
            const res = await axios.put(`http://localhost:3004/User/${post.id}`, {
                FirstName: FirstName,
                LastName: LastName,
                Photo:imgSrc
            }, { method: "put" })
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            navigate("/posts")

        } catch (error) {
            console.log(error.message);
        }
    
    }
    useEffect(() => {
        setFirstName(post.FirstName)
        setLastName(post.LastName)
        // setImgSrc(post.imgSrc)
    }, [])
    
    const editimage = () => {
        setgetphoto("true")
    }
    const retake = () => {
        setImgSrc(null);
    };
    

    // const capture = useCallback(() => {
    //     const imageSrc = Photoref.current.getScreenshot();
    //     setImgSrc(imageSrc);
    //   }, [Photoref]);
    

    return ( 
       < div>
                    <div className="d-block mb-2">
                    <label htmlFor="FirstName" className="text-capitalize">FirstName</label>
                    <input type="text"  id="FirstName" className="form-control" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                
                    </div>
            
                    <div className="d-block mb-2">
                <label htmlFor="LastName" className="text-capitalize">LastName</label>
                <input type="text"  id="LastName" className="form-control" value={LastName}  onChange={(e) => setLastName(e.target.value)} />
                
                
            </div>
            <div className="d-block mb-2" >
            <label htmlFor="Image" className="text-capitalize">Image:</label>
                <div className="container mb-2">
                    <img className="mb-2" src={post.Photo} alt="webcam" />
                    </div>
            </div>
            
            {/* <div className="d-block mb-2">
            <label htmlFor="Image" className="text-capitalize">Image:</label>
                <div className="container mb-2">
                    <img className="mb-2" src={post.Photo} alt="webcam" />
                    <button onClick={editimage}>edit image</button>
                            {getphoto ? (
                                <img className="mb-2" src={post.Photo} alt="webcam" />
                            ) : (
                                <Webcam height={300} width={300} ref={Photoref} />
                            )}
                            <div className="btn-container">
                                {imgSrc ? (
                                <button className="btn btn-info " onClick={retake}>Retake photo</button>
                                ) : (
                                <button className="btn btn-info " onClick={capture}>Capture photo</button>
                                )}
                            </div>
                    </div>
            </div> */}

            

            
    
    <div className="d-block ">
        <button type="submit" className="btn btn-success btn-sm text-capitalize" onClick={update}>update</button>
            </div>
</div>
     );
}
 
export default Update;