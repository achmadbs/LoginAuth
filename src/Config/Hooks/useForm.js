import { useState } from 'react';

const useForm = (initialState) => {
  const [values, setValue] = useState(initialState);
  const [errID, setErrID] = useState(false);
  const [errPass, setErrPass] = useState(false);

  const handleInputText = name => e => {
    const { value } = e.target;
    const reg = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/;
    setValue({
      ...values,
      [name]: value
    });
    switch(name) {
      case 'id':
        setErrID(!reg.test(value), true);
      break;
      case 'password':
        setErrPass(value.length <= 4, true);
      break;
      default: break;
    }
  }

  return {
    handleInputText,
    values,
    errID,
    errPass
  }
}

export default useForm;

