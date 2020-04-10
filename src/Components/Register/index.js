import React, { useState, useEffect } from 'react';
import { Header, ButtonWrap, P } from './style';
import logo from '../../Assets/Images/angeling.gif';
import { Modal, Form, Label } from 'semantic-ui-react';

const Register = ({ show, closeModal }) => {
  const [inputVal, setInputVal] = useState({
    ID: '',
    Password: '',
    Email: '',
    Confirm: '',
    Gender: '',
    Address: ''
  });
  const [errID, setErrID] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [errConfirm, setErrConfirm] = useState(false);
  const [errEmail, setErrEmail] = useState(false);

  useEffect(() => {
    checkPasswordNotMatch();
  },[inputVal.Password, inputVal.Confirm]);

  const checkPasswordNotMatch = () => {
    const { Password, Confirm } = inputVal;
    const isPassMatch = Password === Confirm;
    setErrConfirm(isPassMatch? false : true)
  }

  const handleInputValue = name => e => {
    const { value } = e.target;
    const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    const regEmail = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/;
    setInputVal({
      ...inputVal,
      [name]: value
    })
    switch(name) {
      case 'ID':
        setErrID(value.trim().length < 5, true);
        break;
      case 'Password':
        setErrPass(!regPass.test(value.trim()), true);
        checkPasswordNotMatch();
        break;
      case 'Confirm':
        checkPasswordNotMatch();
        break;
      case 'Email':
        setErrEmail(!regEmail.test(value.trim()), true);
        break;
      default: break;
    }
  }
  
  const handleChangeGender = (e, {value}) => {
    setInputVal({
      ...inputVal,
      Gender: value
    });
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert('Berhasil');
    closeModal();
  }

  const renderLabelErrID = () => {
    return errID && (
      <Label basic color='red' pointing style={{marginTop: 0}}>
        ID tidak boleh kurang dari 4 karakter
      </Label>
    );
  }

  const renderLabelErrPass = () => {
    return errPass && (
      <Label basic color='red' pointing style={{marginTop: 0}}>
        Password harus terdapat huruf besar dan angka
      </Label>
    );
  }

  const renderLabelErrConfirm = () => {
    return errConfirm && (
      <Label basic color='red' pointing style={{marginTop: 0}}>
        Confirm Password tidak sesuai
      </Label>
    );
  }

  const renderLabelErrEmail = () => {
    return errEmail && (
      <Label basic color='red' pointing style={{marginTop: 0}}>
        Gunakan formal email yang sesuai
      </Label>
    );
  }  

  const renderHeader = () => {
    return (
      <Header>
        <img src={logo} size='tiny' alt='icon'/>
        <p>Register Your Account</p>
      </Header>
    );
  }

  const formField = () => {
    const { ID, Password, Confirm, Email, Gender, Address } = inputVal;
    return (
      <>
        <Form.Field>
          <label>ID</label>
          <Form.Input onChange={handleInputValue('ID')}value={ID} error={errID}/>
          {renderLabelErrID()}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Form.Input type="password" onChange={handleInputValue('Password')} value={Password} error={errPass}/>
          {renderLabelErrPass()}
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <Form.Input type="password" onChange={handleInputValue('Confirm')} value={Confirm} error={errConfirm}/>
          {renderLabelErrConfirm()}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Form.Input onChange={handleInputValue('Email')} value={Email} error={errEmail}/>
          {renderLabelErrEmail()}
        </Form.Field>
        <Form.Group inline>
          <Form.Radio
            label='Male'
            onChange={handleChangeGender}
            value={'Male'}
            checked={Gender === 'Male'}
          />
          <Form.Radio
            label='Female'
            onChange={handleChangeGender}
            value={'Female'}
            checked={Gender === 'Female'}
          />
        </Form.Group>
        <Form.TextArea label='Address' onChange={handleInputValue('Address')} value={Address}/>
      </>
    );
  }

  const renderButton = () => {
    return (
      <ButtonWrap>
        <button>Register!</button>
      </ButtonWrap>
    );
  }

  return (
    <Modal trigger={<P onClick={closeModal}>dont have account?</P>} size="tiny" open={show}>
      {renderHeader()}
      <div style={{margin: '1em 2em'}}>
        <Form onSubmit={handleSubmitForm}>
          {formField()}
          {renderButton()}
        </Form >
      </div>
    </Modal>
  );
}

export default Register;