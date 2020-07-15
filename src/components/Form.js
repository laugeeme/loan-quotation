import React, { useState } from 'react';

const Form = ({ quantity, saveQuantity, deadline, saveDeadline }) => {
  
    //useState to validate the form. Starts with false, if there are errors in the form or empty fields, error changes to true and shows a error message.
  const [error, saveError] = useState(false);

  const readQuantity = (e) => {
    saveQuantity(parseInt(e.target.value));
  };

  const readDeadline = (e) => {
    saveDeadline(parseInt(e.target.value));
  };

  const calculateLoan = (e) => {
    e.preventDefault();
    console.log('Enviando formulario');
    //validate
    if (quantity === 0 || deadline === '') {
      saveError(true);
    }

    //make quote
  };

  return (
    <form onSubmit={calculateLoan}>
      <div className="row">
        <div>
          <label>Loan amount</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="Example: 3000"
            onChange={readQuantity}
          />
        </div>
        <div>
          <label>Time to pay</label>
          <select className="u-full-width" onChange={readDeadline}>
            <option value="">Select</option>
            <option value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
            <option value="24">24 months</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Calculate"
            className="button-primary u-full-width"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
