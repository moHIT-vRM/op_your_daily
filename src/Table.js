import React, { Fragment } from "react";
import "./style/Tab.css";

const Table = ({ userData }) => {
  const { headings, detail } = userData;

  return (
    <>
      <div className="table_div">
        <table className="table_container">
          <thead>
         
            <tr className="row">
              {headings?.map((items, index) => (
                <th key={index} >{items}</th>
              ))}
              {/* <th>Name</th>
             <th>Contact</th>
             <th>Registraion Date</th>
             <th>Total Orders</th>
             <th>Denied</th>
             <th>Cancel</th>
             <th>Total Business</th>
             <th>Average Rating</th>
             <th>Flagged</th>
             */}
            </tr>
          </thead>
          <tbody>
              {detail?.map(({id,data}) => (
            <tr key={id} >
                 { data.map((item,index)=>(

                <td  key={index}>{item}</td>
                  ))}
            </tr>
              ))}
              {/* <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td> */}
          </tbody>
          {/* <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Mohit</td>
            <td>8931953772</td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td>02</td>
            <td>Rs. 3010</td>
            <td>5.0</td>
            <td>12</td>
          </tr> */}
        </table>
      </div>
    </>
  );
};

export { Table };
