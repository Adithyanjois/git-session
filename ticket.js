<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ticket Master - Call Center App</title>
    <!-- Bootstrap CDN for CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <title>Login Form</title>
</head>
<body class="p-3 mb-2 bg-warning text-dark">
    <!-- Bootstrap CDN for Optional JS, Jquery & Bootstrap JS  -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>

    <h2>Ticket Master</h2>
    <h3>Listing Tickets - <span id="count">fetching...</span></h3>

    <input type="text" id="search" placeholder="search by code" />
    </br>
    
    <!-- <button id="allBtn">ALL</button>
    <button id="highBtn">HIGH</button>
    <button id="mediumBtn">MEDIUM</button>
    <button id="lowBtn">LOW</button> -->
    
    <label for="select">Select Menu</label>
    <select id="select">
        <option value="">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
    </select>
    
    <table border="1" class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Department</th>
                <th>Priority</th>
                <th>Message</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody id="tableBody">
           
        </tbody>
    </table>

    <br/>
    <form id="ticketForm">
        <fieldset>
            <legend>Add Text</legend>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" /> <br/>

            <label for="department">Department</label>
            <select id="department" name="department">
                <option value="">Select</option>
                <option value="Technical">Technical</option>
                <option value="Sales">Sales</option>
                <option value="Hr">Hr</option>
            </select><br/>

            <label>Priority</label> 
            <input type="radio" id="high" value="High" name="priority"> <label for="high"> High</label> 

            <input type="radio" id="medium" value="Medium" name="priority">
            <label for="medium"> Medium</label>

            <input type="radio" id="low" value="Low" name="priority">
            <label for="low"> Low </label> <br/>

            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea> <br/>

            <input type="submit" /> <input type="reset" />
        </fieldset>
    </form>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="script.js"> </script>
</body>
</html>