import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter first name and last name' });
    } else {
      console.log(firstName, lastName);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal' style={{ modalStyle }}>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

export default AddTechModal;
