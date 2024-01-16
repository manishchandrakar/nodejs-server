# Node.js Server Project

This Node.js server + React + MondoDB project provides a backend for handling CRUD operations on items.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manishchandrakar/nodejs-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-server/node.js-react-server-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the MongoDB connection in `config/db.js` with your MongoDB URI and database name.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The API will be available at `http://localhost:3000`. You can use Postman or any other API testing tool to interact with the endpoints.

## API Endpoints

- **GET /items**: Get all items.
- **POST /items**: Create a new item.
- **GET /items/:id**: Get an item by ID.
- **PUT /items/:id**: Update an item by ID.
- **DELETE /items/:id**: Delete an item by ID.

## Integrating with React.js Frontend

To integrate this backend with a React.js frontend, follow these steps:

1. Create a new React.js project:

   ```bash
   npx create-react-app my-react-app
   ```

2. Install Axios for making HTTP requests:

   ```bash
   cd my-react-app
   npm install axios
   ```

3. In your React components, use Axios to interact with the Node.js server's API.

   Example code for fetching all items:

   ```jsx
   import React, { useEffect, useState } from 'react';
   import axios from 'axios';

   function App() {
     const [items, setItems] = useState([]);

     useEffect(() => {
       axios.get('http://localhost:3000/items')
         .then(response => setItems(response.data))
         .catch(error => console.error('Error fetching items:', error));
     }, []);

     return (
       <div>
         <h1>Items</h1>
         <ul>
           {items.map(item => (
             <li key={item._id}>{item.items}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default App;
   ```

Remember to customize the Axios requests based on your API endpoints.

## Screenshots

- [Sample_Home](https://drive.google.com/file/d/11gK2kEvuNm08bug52ybuywPAzLxVD3hK/view?usp=sharing)
- [Sample_Update](https://drive.google.com/file/d/1UyUu3Mykfw7VDONEdTqmecLUA-VmPtYd/view?usp=sharing)
- [Sample_Edit](https://drive.google.com/file/d/1XAFNXwR2qOe7jYQ40N1jrRXX9KxLl_gk/view?usp=drive_link)  
- [Sample_Delete](https://drive.google.com/file/d/11gK2kEvuNm08bug52ybuywPAzLxVD3hK/view?usp=sharing)  

## Contact

For any inquiries or collaborations, feel free to reach out:

- LinkedIn: [Manish Chandrakar](https://www.linkedin.com/in/manish-chandrakar-23392b183/)
- GitHub: [manishchandrakar](https://github.com/manishchandrakar/)
```

This new section provides a brief guide on how to set up a React.js frontend and integrate it with your Node.js server using Axios for making API requests. Adjust the instructions as needed based on your frontend structure and requirements.