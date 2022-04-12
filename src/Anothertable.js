import React, { Fragment } from "react";
import "../src/style/AndTable.css";

const Anothertable = () => {
  return (
    <>
      <div className="table_div">
        <table className="table_container">
          <thead>
            <tr className="row">
              {/* {headings?.map((items, index) => (
                <th key={index} >{items}</th>
              ))} */}
              <th>S.No</th>
              <th>Image</th>
              <th>Vegetables Name</th>
              <th>Base Qty.</th>
              <th>
                Price
                <div>(Per bse Qty)</div>
              </th>
              <th>In Stock</th>
            </tr>
          </thead>
          <tbody>
            {/* {detail?.map(({id,data}) => (
            <tr key={id} >
                 { data.map((item,index)=>(

                <td  key={index}>{item}</td>
                  ))}
            </tr>
              ))} */}
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
          <tr>
            <td>1</td>
            <td>
              <img src="" alt="error"></img>
            </td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td><input type="checkbox" id="checkbox"></input></td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src="" alt="error"></img>
            </td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td><input type="checkbox" id="checkbox"></input></td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src="" alt="error"></img>
            </td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td><input type="checkbox" id="checkbox"></input></td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <img src="" alt="error"></img>
            </td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td><input type="checkbox" id="checkbox"></input></td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <img src="" alt="error"></img>
            </td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td><input type="checkbox" id="checkbox"></input></td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <img src="" alt="error"></img>
            </td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td><input type="checkbox" id="checkbox"></input></td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <img src="" alt="error"></img>
            </td>
            <td>04/04/2021</td>
            <td>40</td>
            <td>05</td>
            <td><input type="checkbox" id="checkbox"></input></td>
          </tr>
        </table>
      </div>
    </>
  );
};

export { Anothertable };
