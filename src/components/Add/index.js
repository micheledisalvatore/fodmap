import { connect } from 'react-redux';
import { Add, mapDispatchToProps } from './Add';

const connectedAdd = connect(null, mapDispatchToProps)(Add);

export default connectedAdd;
