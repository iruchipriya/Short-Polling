import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://testapi.devtoolsdaily.com/users');
      const jsonData = await response.json();
      console.log('jsonData');
      setData(jsonData);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const pollingInterval = 1000000000;
  useEffect(() => {
    const intervalId = setInterval(fetchData, pollingInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1> Short Polling </h1>
      {data.map((item, index) => (
        <div key={index}>{item.firstName} </div>
      ))}
    </div>
  );
}

export default App;
