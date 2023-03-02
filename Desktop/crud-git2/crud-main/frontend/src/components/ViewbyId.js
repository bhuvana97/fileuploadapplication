import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




const ViewbyId = () => {
  const [getstud, SetGetstud] = useState([]);

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
        SetGetstud(data)
        console.log("get data");
    }
}

useEffect(() => {
    getstuddata();
}, [])

  return (
    <div>ViewbyId

<Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Movie Name:{getstud.movie_name}</ListGroup.Item>
        <ListGroup.Item>Language:{getstud.language}</ListGroup.Item>
        <ListGroup.Item>Actor:{getstud.actor}</ListGroup.Item>
        <ListGroup.Item>Actress:{getstud.actress}</ListGroup.Item>
        <ListGroup.Item>Camera:{getstud.camera}</ListGroup.Item>
        <ListGroup.Item>Producer:{getstud.producer}</ListGroup.Item>
        <ListGroup.Item>Year:{getstud.releasedyear}</ListGroup.Item>
        <ListGroup.Item>Director:{getstud.director}</ListGroup.Item>
      
      </ListGroup>
    </Card>




    </div>
  )
}

export default ViewbyId