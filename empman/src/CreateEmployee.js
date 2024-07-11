import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function CreateEmployee() {

  const navigate = useNavigate();
    const [formData,setFormData] = useState({
        
    })

    const initialFormState = {
        f_Id:'',
        f_Image:'',
        f_Name:'',
        f_Email:'',
        f_Mobile:'',
        f_Designation:'', 
        f_gender:'',
        f_Course:'',
        f_Createdate:''
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/feedback', formData)
          .then((response) => {
            console.log('Form data submitted:', response.data);
            setFormData(initialFormState);
            navigate('/employeelist');
          })
          .catch((error) => {
            console.error('There was an error submitting the form!', error);
          });
      };

      const handleGenderChange = (e) => {
        setFormData({
            ...formData,
            f_Gender: e.target.value,
        });
    };

      // const formContainer = {
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   height: '100vh', /* Full viewport height */
      //   backgroundColor: '#f8f9fa' /* Light background color */
      // }

      // const formContent = {
      //   width: '100%',
      //   maxWidth: '500px', /* Maximum width for the form */
      //   padding: '20px',
      //   backgroundColor: '#fff', /* White background for the form */
      //   border: '1px solid #ddd', /* Light border */
      //   borderRadius: '8px', /* Rounded corners */
      //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' /* Subtle shadow */
      // }

      const formStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width:'100%',
        backgroundColor: '#f8f9fa',
        border: 'solid black 1px'
      }
      
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/dashboard">HOME</a>
                </div>
            </nav>
            <div style={formStyles}>
              <div>
                <form onSubmit={handleSubmit}>
                    <label>User Name:</label>
                    <input  type="text" name="f_Id" value={formData.f_Id} onChange={handleChange} required /><br/>

                    <label>Name:</label>
                    <input type="text" name="f_Name" value={formData.f_Name} onChange={handleChange} required /><br/>

                    <label>Email</label>
                    <input type="email" name="f_Email" value={formData.f_Email} onChange={handleChange} required /><br/>

                    <label>Mob No</label>
                    <input type="number" name="f_Mobile" value={formData.f_Mobile} onChange={handleChange} maxLength="10" required /><br/>

                    <label>Designation</label>
                    <select name="f_Designation" value={formData.f_Designation} onChange={handleChange}>
                      <option value="reeses">No selection</option>
                      <option value="rigatoni">HR</option>
                      <option value="dave">Manager</option>
                      <option value="pumpernickel">Sales</option>
                    </select><br/>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="male"
                                    name="f_Gender"
                                    value="Male"
                                    checked={formData.f_Gender === 'Male'}
                                    onChange={handleGenderChange}
                                />
                                <label className="form-check-label" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="female"
                                    name="f_Gender"
                                    value="Female"
                                    checked={formData.f_Gender === 'Female'}
                                    onChange={handleGenderChange}
                                />
                                <label className="form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <label>Course</label>
                    <input type="text" name="f_Course" value={formData.f_Course} onChange={handleChange} required /><br/>

                    <label>Create Date</label>
                    <input type="date" name="f_Createdate" value={formData.f_Createdate} onChange={handleChange} required /><br/>

                    <label>Photo</label>
                    <input type="file" name="f_Image" value={formData.f_Image} onChange={handleChange} required /><br/><br/>
                    <button type="submit">Submit</button>
                </form>
              </div>
            </div>
        </div>
    )
}


