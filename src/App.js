import React from 'react';
import Modal from './SurgeryModal'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="col-md-1 searcheePluse m-1" data-toggle="tooltip" title="Add emergency surgery">
        {/* <i className="pe-7s-plus fs-20 font-weight-bold basicColorRed" data-toggle="modal" data-target="#emergencyModal"></i> */}
        <i className="fa fa-plus-circle font-weight-bold basicColorRed" data-toggle="modal" data-target="#emergencyModal"></i>
      </div>
      <Modal />
    </div>
  );
}

export default App;
