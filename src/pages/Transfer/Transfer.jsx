import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Transfer() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getCurrentUserDetails = async () => {
      let data = await axios.get(`/user/${id}`);
      data = await data.data;
      setUserDetails(data.user);
    };
    getCurrentUserDetails();
    const getAllUserDetails = async () => {
      let data = await axios.get("/listAllUsers");
      data = await data.data;
      setAllUsers(data.map((details) => details.name));
    };
    getAllUserDetails();
    setSubmitClicked(false);
  }, [id]);
  const userSelectHandler = (e) => {
    console.log(e.target.innerHTML);
    setName(e.target.innerHTML);
  };
  const changeAmountHandler = (e) => {
    setAmount(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    setSubmitClicked(true);
    e.preventDefault();
    const transferData = {
      receiver: name,
      sender: userDetails.name,
      amtTransfered: parseInt(amount),
    };
    setTimeout(() => {
      navigate("/Banking-System-Frontend/customersList");
    }, 1000);
    await axios.post(`/transfer/${id}`, transferData);
  };
  return (
    <>
      <div className="container d-flex mt-3">
        <form onSubmit={onSubmitHandler}>
          <p>Id: {userDetails.accId}</p>
          <p>Email: {userDetails.email}</p>
          <p>Name: {userDetails.name}</p>
          <p>Balance: {userDetails.currentBalance}</p>
          <div className="">
            <Autocomplete
              disablePortal
              options={allUsers}
              renderInput={(params) => (
                <TextField {...params} label="Customer" />
              )}
              onChange={userSelectHandler}
            />
            <TextField
              type="number"
              id="standard-basic"
              label="Amount"
              variant="standard"
              onChange={changeAmountHandler}
            />
          </div>
          <Button variant="contained" type="submit" className="mt-3">
            Make Transaction
          </Button>
        </form>
      </div>
      {submitClicked && (
        <div class="alert alert-success container mt-3" role="alert">
          A simple success alert—check it out!
        </div>
      )}
    </>
  );
}

export default Transfer;
