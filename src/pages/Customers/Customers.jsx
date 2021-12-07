import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useLocation } from "react-router";
function Customers() {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getAllUsers = async () => {
      let allUsers = await (
        await axios.get("http://localhost:8000/listAllUsers")
      ).data;
      console.log("All users =", allUsers);
      setData(allUsers);
    };
    getAllUsers();
  }, [location.key]);
  return (
    <div className="container">
      <h1>Customers</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Id</th>
            <th className="col">Name</th>
            <th className="col">Email</th>
            <th className="col">Current Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((individualData, index) => {
            console.log(individualData);
            return (
              <tr key={individualData.name}>
                <th scope="row">
                  <Link to={`/transfer/${individualData.accId}`}>
                    {individualData.accId}
                  </Link>
                </th>
                <th scope="row">{individualData.name}</th>
                <th scope="row">{individualData.email}</th>
                <th scope="row">{individualData.currentBalance}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
