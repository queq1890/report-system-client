import styled from 'styled-components';

const FormWrapper = styled.form`
  overflow: hidden;
`;

const InputWrapper = styled.div`
  float: left;
`;

const Input = styled.input`
  background-color: white;

  &:focus {
    outline: 0;
  }
`;

const Label = styled.label`
  display: block;
  padding: 5px;
`;

const Button = styled.button`
  margin: 0 10px;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  float: left;

  &:focus {
    outline: 0;
  }
`;

export {
  FormWrapper, InputWrapper, Input, Label, Button,
};
