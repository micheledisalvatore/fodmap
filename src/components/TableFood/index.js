import { connect } from 'react-redux';

import { TableFood, mapStateToProps, mapDispatchToProps } from './TableFood';

const connectedTableFood = connect(mapStateToProps, mapDispatchToProps)(TableFood);

export default connectedTableFood;
