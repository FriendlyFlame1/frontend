import React, { useState } from 'react';

function App() {
  // State to store the fetched data
  const [data, setData] = useState(null);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const jsonData = await response.json();

      // Update state with the fetched data
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>React App with Button</h1>
      <button onClick={fetchData}>Fetch Data</button>
      
      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
