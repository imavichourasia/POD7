import React, { useState, useEffect } from 'react';

import axios from 'axios';



const Droplist = () => {

  const [selectedOption1, setSelectedOption1] = useState('');

  const [selectedOption2, setSelectedOption2] = useState('');

  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [filteredPlaces, setFilteredPlaces] = useState([]);



  useEffect(() => {

    // Fetch data from API endpoint when the component mounts

    fetchData();

  }, []);



  const fetchData = () => {

    axios

      .get('http://localhost:52526/api/Users') // Replace with your API endpoint

      .then((response) => {

        const apiData = response.data; // Assuming the response is an array of objects

        setData(apiData);

      })

      .catch((error) => {

        console.error('Error fetching data:', error);

      });

  };



  useEffect(() => {

    filterData(selectedOption1, selectedOption2);

  }, [selectedOption1, selectedOption2]);



  const handleDropdownChange1 = (event) => {

    const selectedValue = event.target.value;

    setSelectedOption1(selectedValue);

  };



  const handleDropdownChange2 = (event) => {

    const selectedValue = event.target.value;

    setSelectedOption2(selectedValue);

  };



  const filterData = (option1, option2) => {

    let filtered = data;

    if (option1) {

      filtered = filtered.filter(

        (item) => item.name.toLowerCase().includes(option1.toLowerCase())

      );

    }



    if (option2) {

      filtered = filtered.filter(

        (item) => item.username.toLowerCase().includes(option2.toLowerCase())

      );

    }



    setFilteredData(filtered);



    // Update the filtered places based on the filtered data

    const username = filtered.map((item) => item.username);

    const uniquePlaces = [...new Set(username)];

    setFilteredPlaces(uniquePlaces);

  };



  return (

    <div>

      <select value={selectedOption1} onChange={handleDropdownChange1}>

        <option value="">Select a name</option>

        {data.map((item) => (

          <option key={item.id} value={item.name}>

            {item.name}

          </option>

        ))}

      </select>



      <select value={selectedOption2} onChange={handleDropdownChange2}>

        <option value="">Select a place</option>

        {filteredPlaces.map((username) => (

          <option key={username} value={username}>

            {username}

          </option>

        ))}

      </select>



      <table>

        <thead>

          <tr>

            <th>Name</th>

            <th>Username</th>

            <th>Email</th>

            <th>Place</th>

            <th>Contact</th>

            <th>Password</th>

          </tr>

        </thead>

        <tbody>

          {filteredData.map((item) => (

            <tr key={item.id}>

              <td>{item.name}</td>

              <td>{item.username}</td>

              <td>{item.email}</td>

              <td>{item.place}</td>

              <td>{item.contact}</td>

              <td>{item.password}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};



export default Droplist;




