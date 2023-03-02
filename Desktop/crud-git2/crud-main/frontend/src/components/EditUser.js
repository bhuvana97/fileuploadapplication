// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';
import {useState,useEffect} from 'react'
import { NavLink ,useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function EditUser() {
    const navigate = useNavigate();
    
    const [inputdata,setInputdata]=useState({
        "movie_name":"",
        "actor":"",
        "actress":"",
        "language":"",
        "releasedyear":"",
        "director":"",
        "camera":"",
        "producer":""
    })
    
    //onchange function
    const setstud=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
        setInputdata((prestud)=>{
            return{
                ...prestud,[name]:value
            }
        })
    }


    //get single data student
    const { id } = useParams("");
    console.log(id);

    const getstuddata = async () => {
        const res = await fetch(`http://localhost:5001/getstud/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setInputdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getstuddata();
    }, [])

    //update student Data
    const updatestud= async(e)=>{
        e.preventDefault();

        const {actor,
            actress,
            language,
            releasedyear,
        director, camera,producer} =inputdata;
        const res2 = await fetch(`http://localhost:5001/updatestud/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                actor,
                actress,
                language,
                releasedyear,
            director, camera,producer            })
        });
        const data2= await res2.json();
        setInputdata(data2);
        toast.success('Please wait  !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true, 
            progress: undefined,
            });
        setTimeout(() => {
            navigate('/allstud');
          }, 3000);


    }

    
  return (


    <form className="container mt-3 mb-3">
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <h2>Edit Details</h2>
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" name="movie_name" value={inputdata.movie_name} onChange={setstud} className="form-control" />
        </Form.Group>
        
    </Row>
    <Row className="mb-3">
      
    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Actor</Form.Label>
            <Form.Control type="text" name="actor" value={inputdata.actor} onChange={setstud} className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
      
        <Form.Group className="col col-sm-6" controlId="formGridAddress2">
            <Form.Label>Actress</Form.Label>
            <Form.Control className="form-control" name="actress" value={inputdata.actress} onChange={setstud} type="text" />
        </Form.Group>
    </Row>
    

    <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Language</Form.Label>
          <Form.Control className="form-control" name="language" value={inputdata.language} onChange={setstud} type="text" />
      </Form.Group>
  </Row>


  <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Director</Form.Label>
          <Form.Control className="form-control" name="director" value={inputdata.director} onChange={setstud} type="text" />
      </Form.Group>
  </Row>




  <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Released year</Form.Label>
          <Form.Control className="form-control" name="releasedyear" value={inputdata.releasedyear} onChange={setstud} type="Date" />
      </Form.Group>
  </Row>


  <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Camera</Form.Label>
          <Form.Control className="form-control" name="camera" value={inputdata.camera} onChange={setstud} type="text" />
      </Form.Group>
  </Row>


  <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Producer</Form.Label>
          <Form.Control className="form-control" name="producer" value={inputdata.producer} onChange={setstud} type="text" />
      </Form.Group>
  </Row>


    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button type="submit" onClick={updatestud} className="me-4 btn btn-success btn-lg btn-block">Submit</button>
            {/* <button type="reset" onClick="{resetButton}" className="me-4 btn btn-danger btn-lg btn-block">Cancel</button> */}
        </Form.Group>
    </Row>
</form>
  );
}

export default EditUser;