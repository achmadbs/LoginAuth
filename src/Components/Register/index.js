import React, { useState, useEffect, useCallback } from 'react';
import { Header, ButtonWrap, P } from './style';
import logo from '../../Assets/Images/angeling.gif';
import { Modal, Form, Label, Button } from 'semantic-ui-react';
import firebase from '../../Config/Firebase/index';
import { connect } from 'react-redux';

const Register = ({ toggleModal, loadingState, modalState }) => {
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
  const [isLoading, setIsLoading] = useState(loadingState);

  const checkPasswordNotMatch = useCallback(() => {
    const { Password, Confirm } = inputVal;
    const isPassMatch = Password === Confirm;
    setErrConfirm(isPassMatch? false : true)
  },[inputVal])

  useEffect(() => {
    checkPasswordNotMatch();
  },[checkPasswordNotMatch]);

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

  const handleClearInput = () => {
    setInputVal({ID: '', Password: '', Email: '', Confirm: '', Gender: '', Address: ''});
  }

  const handleSubmitForm = async(e) => {
    const { Email, Password } = inputVal
    e.preventDefault();
    try {
      setIsLoading(true);
      await firebase.auth().createUserWithEmailAndPassword(Email, Password);
      handleClearInput();
      setIsLoading(false);
      alert('berhasil login');
      toggleModal();
    }
    catch (e) {
      const errorCode = e.message
      alert(errorCode);
      setIsLoading(false);
    }
  }

  const renderHeader = () => {
    return (
      <Header>
        <img src={logo} alt='icon'/>
        <p>Register Your Account</p>
      </Header>
    );
  }

  const renderLabelErr = (state) => {
    let text = ''
    switch(state) {
      case errID:
        text = 'ID tidak boleh kurang dari 4 karakter'
        break;
      case errPass:
        text = 'Password harus terdapat huruf besar dan angka'
        break;
      case errEmail:
        text = 'Gunakan formal email yang sesuai'
        break;
      default: break;
    }
    return state && (
      <Label basic color='red' pointing style={{marginTop: 0}}>
        {text}
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

  const formField = () => {
    const { ID, Password, Confirm, Email, Gender, Address } = inputVal;
    return (
      <>
        <Form.Field>
          <label>ID</label>
          <Form.Input onChange={handleInputValue('ID')} value={ID} error={errID}/>
          {renderLabelErr(errID)}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Form.Input type="password" onChange={handleInputValue('Password')} value={Password} error={errPass}/>
          {renderLabelErr(errPass)}
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <Form.Input type="password" onChange={handleInputValue('Confirm')} value={Confirm} error={errConfirm}/>
          {renderLabelErrConfirm()}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Form.Input onChange={handleInputValue('Email')} value={Email} error={errEmail}/>
          {renderLabelErr(errEmail)}
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
        <Button basic loading={isLoading} disabled={isLoading}>Register!</Button>
      </ButtonWrap>
    );
  }

  return (
    <Modal trigger={<P onClick={toggleModal}>dont have account?</P>} size="tiny" open={!!modalState} closeOnDimmerClick={true} onClose={toggleModal}>
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

const mapStateToProps = ({ isLoading }) => ({
  loadingState: isLoading
});

export default connect(mapStateToProps, null)(Register);