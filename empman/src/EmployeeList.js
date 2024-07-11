// import React, {useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default function EmployeeList() {
//   const navigate = useNavigate();
//   // const [employees, setEmployees] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/createEmployee');
//   };

//   // useEffect(() => {
//   //   axios.get('http://localhost:8000/employees')
//   //     .then(response => {
//   //       setEmployees(response.data);
//   //     })
//   //     .catch(error => {
//   //       console.error('There was an error fetching the data!', error);
//   //     });
//   // }, []);

//   // useEffect(() => {
//   //   axios.get('http://localhost:8000/employees')
//   //     .then(response => {
//   //       if (Array.isArray(response.data)) {
//   //         setEmployees(response.data);
//   //       } else {
//   //         console.error('Expected an array but received:', response.data);
//   //       }
//   //     })
//   //     .catch(error => {
//   //       console.error('There was an error fetching the data!', error);
//   //     });
//   // }, []);

//   const [userData, setUserdata] = useState([]);

//   useEffect( ()=> {
//     const getUserdata = async()=>{
//       const reqData = await fetch("http://localhost:8000/employees");
//       const resData = await reqData.json();
//       setUserdata(resData);
//       console.log(resData)
//     }
//     getUserdata();
//   },[]);

//   return (
//     <div>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="/dashboard">HOME</a>

//                 <div className="collapse navbar-collapse" id="navbarText">
//                 </div>
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/dashboard">Employee Count:</a>
//                 </div>
//                 <div className="container-fluid">
//                     <button    
//                       type="submit"
//                       value="Submit"
//                       onClick={(e) => handleSubmit(e)}
//                       className="navbar-brand"
//                     >
//                       Create Employee
//                     </button> 
//                 </div>
//             </div>
//         </nav>
//         <div>
//           <h2>Employee Table</h2>
//           <table border="1">
//             <thead>
//               <tr>
//                 <th scope="col">Unique ID</th>
//                 <th scope="col">Image</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Mob.No.</th>
//                 <th scope="col">Designation</th>
//                 <th scope="col">Gender</th>
//                 <th scope="col">Course</th>
//                 <th scope="col">Create Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userData.map((userData, index) => (
//                 <tr key={index}>
//                   <td>{userData.f_Id}</td>
//                   <td>{userData.f_Image}</td>
//                   <td>{userData.f_Name}</td>
//                   <td>{userData.f_Email}</td>
//                   <td>{userData.f_Mobile}</td>
//                   <td>{userData.f_Designation}</td>
//                   <td>{userData.f_gender}</td>
//                   <td>{userData.f_Course}</td>
//                   <td>{userData.f_Createdate}</td>
//                   <td>
//                     <Link to="" className="btn btn-success mx-1">Edit</Link>
//                     <Link to="" className="btn btn-success mx-1">Delete</Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function EmployeeList() {
  const navigate = useNavigate();
  const [userData, setUserdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/createEmployee');
  };

  const handleDelete = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8000/employees/${id}`);
        console.log('Deleted:', response.data);
        // Filter out the deleted employee from userData
        setUserdata(userData.filter(user => user.f_Id !== id));
    } catch (error) {
        console.error('Error deleting employee:', error);
    }
};

  useEffect(() => {
    const getUserdata = async () => {
      try {
        const reqData = await fetch('http://localhost:8000/employees');
        const resData = await reqData.json();
        setUserdata(resData);
        console.log(resData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getUserdata();
  }, []);

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/dashboard">
            HOME
          </a>
          <div className="collapse navbar-collapse" id="navbarText"></div>
          <div className="container-fluid">
            <div className="navbar-brand">
              Employee Count : {userData.length}
            </div>
          </div>
          <div className="container-fluid">
            <button
              type="submit"
              value="Submit"
              onClick={(e) => handleSubmit(e)}
              className="navbar-brand"
            >
              Create Employee
            </button>
          </div>
        </div>
      </nav>
      <div>
        <h2>Employee Table</h2>
        <table border="1px" width={"100%"} cellPadding={"10px"}>
          <thead>
            <tr>
              <th border="1px">S. No.</th>
              <th>Unique ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mob.No.</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Create Date</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{user.f_Id}</td>
                <td>
                {user.f_Image ? (
                  <img src={user.f_Image} alt="Employee" style={{ width: '10px', height: '10px' }} />
                ) : (
                  'No Image'
                )}
                </td>
                <td>{user.f_Name}</td>
                <td>{user.f_Email}</td>
                <td>{user.f_Mobile}</td>
                <td>{user.f_Designation}</td>
                <td>{user.f_gender}</td>
                <td>{user.f_Course}</td>
                <td>{user.f_Createdate}</td>
                <td>
                  <Link to="" className="btn btn-success mx-1">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleDelete(user.f_Id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
