import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './FormResponse.module.css';

export default function FormResponse({ formName }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/users'); // API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Filter data based on the search term
  const filteredData = data.filter(item => {
    const fullName = `${item.name.firstname} ${item.name.lastname}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || 
           item.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Dynamically create table headers based on the keys of the first object
  const tableHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className={styles.formResponse}>
      <div className="container d-flex align-items-center justify-content-between mt-3 mb-5">
        <p className='fw-bold'>{formName}</p>
        <div className="searchInput">
          <input
            type="text"
            placeholder='Search by name or email'
            className='form-control'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="download-btn">
          <button className="btn w-100">
            <span>Download</span>
            <i className="fa-solid fa-download fa-sm ps-2"></i>
          </button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} scope="col">{header.charAt(0).toUpperCase() + header.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                {tableHeaders.map((header, i) => {
                  // Handle nested objects in the data
                  if (header === 'name') {
                    return (
                      <td key={i}>{item.name.firstname} {item.name.lastname}</td>
                    );
                  } else if (header === 'address') {
                    return (
                      <td key={i}>{item.address.city}, {item.address.street}</td>
                    );
                  } else {
                    return <td key={i}>{item[header]}</td>;
                  }
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={tableHeaders.length + 1} className="text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}