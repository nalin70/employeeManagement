import React from "react";
import Login from './Login.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard.js";
import EmployeeList from "./EmployeeList.js";
import CreateEmployee from "./CreateEmployee.js";
import EditEmployee from './EditEmployee';


function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/createEmployee" element={<CreateEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
