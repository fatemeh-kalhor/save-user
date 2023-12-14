import { useCallback, useState } from "react";
import axios  from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import Webcam from "react-webcam";

const Create = () => {
    const [FirstName, setFirstName] = useState([])
    const [LastName, setLastName] = useState([])
    const [webcam, setPhoto] = useState(null)
    const [imgSrc, setImgSrc] = useState(null);

    const FirstNameref=useRef("")
    const LastNameref = useRef("")
    const Photoref = useRef(null)

    const navigate = useNavigate()


    const retake = () => {
        setImgSrc(null);
    };
    

    const capture = useCallback(() => {
        const imageSrc = Photoref.current.getScreenshot();
        setImgSrc(imageSrc);
      }, [Photoref]);
    

    const fetchcreatepost = async () => {
        try {
            let res = await axios.post('http://localhost:3004/User', {
                FirstName: FirstName,
                LastName: LastName,
                Photo:imgSrc

            })
            console.log(res.data);
                

        } catch (error) {
            console.log(error.message);
        }
    }




    const createpost = () => {
        fetchcreatepost()
        
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        navigate("/posts")
    }

    return (
        <div className="col-6 offset-3 bg-dark text-white mt-2 p-5">
            <div className="d-block mb-2">
                <label htmlFor="FirstName" className="text-capitalize">FirstName:</label>
                <input type="text" ref={FirstNameref} id="title" className="form-control" placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)} />
               
                {FirstName.length ===0?<p className="text-danger">this field required</p>:""}
                {FirstName.length>500?<p className="text-danger">this field dont more than 500 char</p>:""}
            </div>
            <div className="d-block mb-2">

            <label htmlFor="LastName" className="text-capitalize">LastName:</label>
                <input type="text" ref={LastNameref} id="title" className="form-control" placeholder="LastName" onChange={(e) => setLastName(e.target.value)} />
               
                {LastName.length ===0?<p className="text-danger">this field required</p>:""}
                {LastName.length > 500 ? <p className="text-danger">this field dont more than 500 char</p> : ""}
                
            </div>

            <div className="d-block mb-2">
            <label htmlFor="Image" className="text-capitalize">Image:</label>
                <div className="container mb-2">
                            {imgSrc ? (
                                <img className="mb-2" src={imgSrc} alt="webcam" />
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

            </div>
            
            <div className="d-block ">
                <button type="submit" disabled={FirstName.length>1 && LastName.length>1 ?null:"disabled"} className="btn btn-success btn-sm text-capitalize" onClick={createpost}>create</button>
            </div>

        </div>
    );
}
 
export default Create;