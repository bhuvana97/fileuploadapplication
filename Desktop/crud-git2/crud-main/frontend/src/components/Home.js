// import {Table,Button} from 'react-bootstrap';
// import "./Home.css"
// function Home() {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Movie</th>
//           <th>Actor</th>
//           <th>Actress</th>
//           <th>Language</th>
// <th>Director</th>
// <th>Released Year</th>
// <th>Camera</th>
// <th>Producer</th>
// <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Brokeback mountain</td>
//           <td>Heath Ledger</td>
//           <td> Jake Gyllenhaal</td>
//           <td>English</td>
//           <td>Ang Lee</td>
//           <td></td>
//           <td></td>
//           <td></td>
//           <td className='d-flex justify-content-between'>

      
//           <Button variant="outline-primary">Edit</Button>   
//           <Button variant="outline-danger">Danger</Button>
//           </td>
//         </tr>
        
    
//       </tbody>
//     </Table>
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

    const [getstud, SetGetstud] = useState([]);
    console.log(getstud)
    //get student Data
    const getstuddata = async () => {

        const res = await fetch("http://localhost:5001/getstud", {
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

    //Delete student data
    const deletestud = async (id) => {

        const res2 = await fetch(`http://localhost:5001/deletestud/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            getstuddata();

        }

    }
    //search Student
    const [searchInput,setSearchInput]=useState('');
    const searchStud=(searchval)=>{
        setSearchInput(searchval)
    }
    return (
        <div className='container mt-5'>
            <div className='d-flex'>
                <h4>All Movie Information</h4>
                <div class="ms-auto w-50">
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search movies" 
                        onChange={(e)=>searchStud(e.target.value)}
                    />
                </div>
            </div>

            <div className='underline'></div>
            <table className="table table-bordered mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Actor</th>
                        <th scope="col">Actress</th>
                        <th scope="col">Language </th>
                        <th scope="col">Producer </th>
                        <th scope="col">Camera </th>

                        <th scope="col">Releasedyear </th>
                        <th scope="col">Director </th>
<th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>

                    {getstud.filter((val)=>{
                        if(searchInput == ""){
                            return val
                        }else if(val.movie_name.toLowerCase().includes(searchInput.toLowerCase())){
                            return val; 
                        }
                    }).map((result, id) => {
                        return (
                            <>

                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td>{result.movie_name}</td>
                                    <td>{result.actor}</td>
                                    <td>{result.actress}</td>
                                    <td>{result.language}</td>
                                    <td>{result.producer}</td>
<td>{result.camera}</td>
                                    <td>{result.releasedyear}</td>
                                    <td>{result.director}</td>

                                    <td>
                                        <Link className='btn btn-success ms-2' to={`/view/${result._id}`}>View</Link>
                                        <Link className='btn btn-warning ms-2' to={`/edit/${result._id}`}>Update</Link>
                                        <button className='btn btn-danger ms-2'
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => deletestud(result._id)}>Delete</button>
                                    </td>
                                </tr>


                            </>
                        )
                    })}




                </tbody>
            </table>

        </div>
    )
}
