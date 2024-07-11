// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();
// const port = 8000;

// app.use(bodyParser.json());
// app.use(cors());

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'nalin@123',
//     database: 'form_database',
// });

// // Define your API routes

// // Create a route to handle form submissions
// app.post('/feedback', (req, res) => {
//     const formData = req.body;
//     console.log(formData);
//     pool.query('INSERT INTO t_Employee SET ?;', formData, (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).json({ error: 'An error occurred while saving the form data.' });
//         } else {
//             console.log('Form data saved successfully');
//             res.status(200).json({ affectedRows: result.affectedRows });
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'nalin@123',
    database: 'form_database',
});

// Define your API routes

// Create a route to handle form submissions
app.post('/feedback', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    
    pool.query('INSERT INTO t_Employee SET ?;', formData, (err, result) => {
        if (err) {
            console.error('Error occurred while saving form data:', err);
            res.status(500).json({ error: 'An error occurred while saving the form data.', details: err.message });
        } else {
            console.log('Form data saved successfully:', result);
            res.status(200).json({ affectedRows: result.affectedRows });
        }
    });
});

//get the data from database table
// app.get('/employees', (req, res) => {
//     pool.query('SELECT * FROM t_Employee;', (err, results) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             res.status(500).json({ error: 'An error occurred while fetching data.' });
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

app.get('/employees', (req, res) => {
    pool.query('SELECT * FROM t_Employee', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
        } else {
            res.status(200).json(results); // Ensure results is an array
        }
    });
});

// Delete employee route
app.delete('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    pool.query('DELETE FROM t_Employee WHERE f_Id = ?', [employeeId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while deleting the employee.' });
        } else {
            console.log(`Deleted employee with ID ${employeeId}`);
            res.status(200).json({ affectedRows: result.affectedRows });
        }
    });
});

// Update an employee
app.put('/employees/:id', (req, res) => {
    const formData = req.body;
    const { id } = req.params;
    pool.query('UPDATE t_Employee SET ? WHERE f_Id = ?', [formData, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while updating the employee data.' });
        } else {
            res.status(200).json({ affectedRows: result.affectedRows });
        }
    });
});

// Update employee route
app.put('/employees/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    pool.query('UPDATE t_Employee SET ? WHERE f_Id = ?', [updatedData, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while updating the data.' });
        } else {
            res.status(200).json({ message: 'Data updated successfully' });
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
