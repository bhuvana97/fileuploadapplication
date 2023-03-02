
import { useState } from 'react';
import { Form,  Row} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Toastontainer, toast } from 'react-toastify';

function AddUser() {
    const navigate = useNavigate();

    const [formdata,setformdata]=useState({
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
 const handleChange=(e)=>{
    console.log(e.target.value);
    setformdata({ ...formdata, [e.target.name]: e.target.value });   
}

  //onclick event
  const addinpdata = async (e) => {
    e.preventDefault();

    const {  movie_name,
        actor,
        actress,
        language,
        releasedyear,
    director, camera,producer} = formdata;

    const res = await fetch("http://localhost:5001/addstud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            movie_name,
            actor,
            actress,
            language,
            releasedyear,
        director, camera,producer
        })
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error ");
        alert("error");

    } else {
        setformdata(data);
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
}
  return (


    <form className="container mt-3 mb-3">
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" name="movie_name" value={formdata.movie_name} onChange={handleChange} className="form-control" />
        </Form.Group>
        
    </Row>
    <Row className="mb-3">
      
    <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Actor</Form.Label>
            <Form.Control type="text" name="actor" value={formdata.actor} onChange={handleChange} className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
      
        <Form.Group className="col col-sm-6" controlId="formGridAddress2">
            <Form.Label>Actress</Form.Label>
            <Form.Control className="form-control" name="actress" value={formdata.actress} onChange={handleChange} type="text" />
        </Form.Group>
    </Row>
    

    <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Language</Form.Label>
          <Form.Control className="form-control" name="language" value={formdata.language} onChange={handleChange} type="text" />
      </Form.Group>
  </Row>


  <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Director</Form.Label>
          <Form.Control className="form-control" name="director" value={formdata.director} onChange={handleChange} type="text" />
      </Form.Group>
  </Row>




  <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Released year</Form.Label>
          <Form.Control className="form-control" name="releasedyear" value={formdata.released_year} onChange={handleChange} type="Date" />
      </Form.Group>
  </Row>


  <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Camera</Form.Label>
          <Form.Control className="form-control" name="camera" value={formdata.camera} onChange={handleChange} type="text" />
      </Form.Group>
  </Row>


  <Row className="mb-3">
      
      <Form.Group className="col col-sm-6" controlId="formGridAddress2">
          <Form.Label>Producer</Form.Label>
          <Form.Control className="form-control" name="producer" value={formdata.producer} onChange={handleChange} type="text" />
      </Form.Group>
  </Row>


    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button type="submit" onClick={addinpdata} className="me-4 btn btn-success btn-lg btn-block">Submit</button>
            {/* <button type="reset" onClick="{resetButton}" className="me-4 btn btn-danger btn-lg btn-block">Cancel</button> */}
        </Form.Group>
    </Row>
</form>
  );
}

export default AddUser;