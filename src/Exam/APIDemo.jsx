import React, { useEffect, useState } from 'react'

export default function APIDemo() {
    const [data, setData] =  useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        fetch("https://dummy-json.mock.beeceptor.com/companies").then((response)=>
        response.json()

    ).then((data) => {
        setData(data)
    }).catch((err) => {
        setError(err.message)
    });
        return () => {
            
        };
    }, []);
  return (
    <div>
         <h2><u>Fetch API Demo</u></h2>
        {
            error ? <b>{error}</b> : 
            data.length ==0 ? <b>Loading...</b> : 
      
        <table border={1}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Indrustry</th>
                <th>Domain</th>
            </tr>
            {
                 data.map((company,index) => (
                    <tr key={index}>
                        <td>{company.id}</td>
                        <td>{company.name}</td>
                        <td>{company.address}</td>
                        <td>{company.industry}</td>
                        <td>{company.domain}</td>
                    </tr>
                    
                 ))
            }
        </table>
}
        
    </div>
  )
}
