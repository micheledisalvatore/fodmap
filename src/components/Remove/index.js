import { connect } from 'react-redux';
import { Remove, mapStateToProps, mapDispatchToProps } from './Remove';

const connectedRemove = connect(mapStateToProps, mapDispatchToProps)(Remove);

export default connectedRemove;
