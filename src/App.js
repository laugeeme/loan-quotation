import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Msj from './components/Msj';
import Result from './components/Result';
import Spinner from './components/Spinner';

function App() {
  //useState needs the value of the state (quantity) and the method to update that state (saveQuantity)
  //Define state. UseState starts with 0$, and when saveQuantity changes, useStates updates.

  const [quantity, saveQuantity] = useState(0);
  const [deadline, saveDeadline] = useState('');
  const [total, saveTotal] = useState(0);
  const [loading, saveLoading] = useState(false);

  let component;

  if (loading) {
    component = <Spinner />;
  } else if (total === 0) {
    component = <Msj />;
  } else {
    component = (
      <Result total={total} deadline={deadline} quantity={quantity} />
    );
  }

  return (
    <Fragment>
      <Header title="Loan quotation" />

      <div className="container">
        <Form
          quantity={quantity}
          saveQuantity={saveQuantity}
          deadline={deadline}
          saveDeadline={saveDeadline}
          saveTotal={saveTotal}
          saveLoading={saveLoading}
        />

        <div className="mensajes">{component}</div>
      </div>
    </Fragment>
  );
}

export default App;
