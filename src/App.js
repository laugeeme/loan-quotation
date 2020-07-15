import React, { Fragment, useState } from 'react';
import Header from './components/ Header';
import Form from './components/Form';

function App() {
  //useState needs the value of the state (quantity) and the method to update that state (saveQuantity)
  //Define state. UseState starts with 0$, and when saveQuantity changes, useStates updates.

  const [quantity, saveQuantity] = useState(0);
  const [deadline, saveDeadline] = useState('');
  const [total, saveTotal] = useState(0);

  return (
    <Fragment>
      <Header title="Loan quotation" />

      <div className="container">
        <Form
          quantity={quantity}
          saveQuantity={saveQuantity}
          deadline={deadline}
          saveDeadline={saveDeadline}
          total={total}
          saveTotal={saveTotal}
        />

        <p>Amount to be paid: $ {total}</p>
      </div>
    </Fragment>
  );
}

export default App;
