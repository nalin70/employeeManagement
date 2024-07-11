import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        f_Id: '',
        f_Name: '',
        f_Email: '',
        f_Mobile: '',
        f_Designation: '',
        f_Gender: 'Male',
        f_Course: '',
        f_Createdate: '',
        f_Image: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/employees/${id}`)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching employee data:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'f_Image' && files.length > 0) {
            const file = files[0];
            const fileType = file.type;

            if (fileType === 'image/jpeg' || fileType === 'image/png') {
                setFormData({
                    ...formData,
                    [name]: file,
                });
            } else {
                alert('Please upload a JPG or PNG file.');
            }
        } else if (name === 'f_Mobile') {
            if (value.length <= 10) {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleGenderChange = (e) => {
        setFormData({
            ...formData,
            f_Gender: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();

        for (let key in formData) {
            formDataObj.append(key, formData[key]);
        }

        try {
            await axios.put(`http://localhost:8000/employees/${id}`, formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/dashboard');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const formContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa'
    };

    const formContentStyle = {
        width: '100%',
        maxWidth: '500px',
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };

    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/dashboard">HOME</a>
                </div>
            </nav>
            <div style={formContainerStyle}>
                <div style={formContentStyle}>
                    <h3>Edit Employee</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="f_Id" className="form-label">User Name</label>
                            <input className="form-control" type="text" name="f_Id" value={formData.f_Id} onChange={handleChange} required readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="f_Name" className="form-label">Name</label>
                            <input className="form-control" type="text" name="f_Name" value={formData.f_Name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="f_Email" className="form-label">Email</label>
                            <input className="form-control" type="email" name="f_Email" value={formData.f_Email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="f_Mobile" className="form-label">Mob No</label>
                            <input className="form-control" type="number" name="f_Mobile" value={formData.f_Mobile} onChange={handleChange} maxLength="10" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="f_Designation" className="form-label">Designation</label>
                            <select className="form-control" name="f_Designation" value={formData.f_Designation} onChange={handleChange} required>
                                <option value="">Select Designation</option>
                                <option value="HR">HR</option>
                                <option value="Manager">Manager</option>
                                <option value="Sales">Sales</option>
                            </select>
                        </div>
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
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="male">Male</label>
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
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="f_Course" className="form-label">Course</label>
                            <input className="form-control" type="text" name="f_Course" value={formData.f_Course} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="f_Createdate" className="form-label">Create Date</label>
                            <input className="form-control" type="date" name="f_Createdate" value={formData.f_Createdate} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="f_Image" className="form-label">Photo</label>
                            <input className="form-control" type="file" name="f_Image" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary me-2">Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate('/dashboard')}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
