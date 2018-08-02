import { connect } from 'react-redux';
import enhanceWithClickOutside from 'react-click-outside';

import { Header, mapDispatchToProps, mapStateToProps } from './Header';

const enhancedHeader = enhanceWithClickOutside(Header);

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(enhancedHeader);

export default connectedHeader;
