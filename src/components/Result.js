import React from 'react';

const Result = ({ total, deadline, quantity }) => (
  <div className="u-full-width resultado">
    <h2>Summary</h2>
    <p>The requested quantity is {quantity} $</p>
    <p>Payable in {deadline} months </p>
    <p>Your monthly payment is: {(total / deadline).toFixed(2)} $</p>
    <p>Total to be paid: {(total).toFixed(2)} $</p>
  </div>
);

export default Result;
