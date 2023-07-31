import React, { useEffect, useState } from "react";
import './SearchBox2.css';


function SearchBox2() {
    useEffect(() => {
        fetch('http://localhost:52526/api/Users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
                setFilterData(data);
            })
            .catch(err => console.log(err))
    }, [])
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const handleFilter = (value) => {
        const res = filterData.filter(f => f.username.toLowerCase().includes(value) || f.name.toLowerCase().includes(value) || f.email.toLowerCase().includes(value) || f.title.toLowerCase().includes(value) || f.place.toLowerCase().includes(value))

        setData(res);
    }
    return (
        <div className='search-top'>
            <div className='search'>
                <input type="text" placeholder='Search Here' onChange={e => handleFilter(e.target.value)} />

            </div>
         

                    <div>

                    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Place</th>
          <th>Email</th>
        
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
                        <td> {item.title}</td>
                        <td>{item.name}</td>
                        <td> {item.username}</td>
                        <td>{item.place}</td>
                        <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
                    </div>
        </div>    
    )
}
export default SearchBox2