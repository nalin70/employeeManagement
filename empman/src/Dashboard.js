import React from 'react';
export default function Dashboard() {
    const headingStyle = {
        color: '#333', // Example color
        fontSize: '24px', // Example font size
        fontWeight: 'bold', // Example font weight
        padding: '100px', // Example padding
        backgroundColor: '#f0f0f0', // Example background color
        borderRadius: '8px', // Example border radius
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      };
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/dashboard">HOME</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/employeelist">Employee List</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/EmployeeList">UserName</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">LogOut</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={containerStyle}>
                <h3 style={headingStyle}>Welcome Admin panel</h3>
            </div>
    </div>
  )
  
}
