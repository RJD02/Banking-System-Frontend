import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function TransactionHistory() {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getTransferHistory = async () => {
      let transactionData = await axios.get("/listAllTransactions");
      transactionData = await transactionData.data;
      setData(transactionData.reverse());
    };
    getTransferHistory();
  }, [location.key]);
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((history) => (
            <tr key={history.sender}>
              <th scope="row">{history.sender}</th>
              <th scope="row">{history.receiver}</th>
              <th scope="row">{history.amtTransfered}</th>
              <th scope="row">
                {moment(history.transferDate).fromNow()}
                {/* ({moment(history.transferDate).format("YYYY-MM-DD")}) */}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
