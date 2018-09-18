import { connect } from 'react-redux';
import Form from 'components/Form';
import { addArticle } from './actions';

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
});

const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormContainer;
