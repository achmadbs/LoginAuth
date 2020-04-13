import React, { useState, useCallback } from 'react';
import { Form, Grid, Segment, Checkbox } from 'semantic-ui-react';
import { Header, Card, ButtonWrap, Background } from './style';
import { isEmpty } from 'lodash';
import Register from '../Register/index';
import useForm from '../../Config/Hooks/useForm';
import { connect } from 'react-redux';

const initialState = ({
  id: '',
  password:''
})

const LoginForm = () => {
  const { values, handleInputText, errID, errPass } = useForm(initialState);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  }

  const renderHeader = () => {
    return (
      <Header>
        <span/>
        <p>LogOn</p>
      </Header>
    );
  }

  const renderInputField = () => {
    const { id, password } = values;
    return (
      <>
        <Form.Group inline>
          <Form.Field>
            <label style={{color: '#6495ED', fontWeight: 900}}>&emsp; &emsp; &nbsp; &ensp; ID &nbsp;</label>
            <input
              onChange={handleInputText('id')}
              value={id}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label='keep'/>
          </Form.Field>
        </Form.Group>
            <Form.Group inline>
          <Form.Field>
            <label style={{color: '#6495ED', fontWeight: 900}}>Password</label>
            <input 
              onChange={handleInputText('password')}
              value={password}
              type='password'
            />
          </Form.Field>
        </Form.Group>
      </>
    );
  }

  const modalRegister = useCallback(() => {
    return (
      <Register toggleModal={handleToggleModal} modalState={showModal}/>
    )
  },[showModal])

  const renderButton = () => {
    const { id, password } = values
    const disable = (errID || errPass) || (isEmpty(id) || isEmpty(password));
    return (
      <ButtonWrap>
        <Grid.Column>
          <div style={{height: '1.5em', marginRight: '1em'}}>
            {modalRegister()}
          </div>
        </Grid.Column>
        <Grid.Column floated='right'>
          <button disabled={!!disable } type='submit'>login</button>
        </Grid.Column>
      </ButtonWrap>
    );
  }

  return (
    <Background>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }}>
          <Card>
            {renderHeader()}
            <Form>
              <Segment>
                {renderInputField()}
              </Segment>
            </Form>
            {renderButton()}
          </Card>
        </Grid.Column>
      </Grid>
    </Background>
  );
};

const mapStateToProps = (state) => ({
  testRedux: state.popUpShow
});

export default connect(mapStateToProps, null)(LoginForm);
