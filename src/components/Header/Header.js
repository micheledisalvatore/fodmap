import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators } from 'redux';

import { search } from '../../actions/food';

import Add from '../Add';
import Remove from '../Remove';

import { AlertSuccess, InputsGroup, SearchInput, Label } from './Header.styled';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearchVisible: false,
    };

    this.searchInput = React.createRef();
    this.search = this.search.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
  }

  showSearch() {
    this.setState({
      isSearchVisible: true,
    });
  }

  hideSearch() {
    this.setState({
      isSearchVisible: false,
    });
  }

  search(e) {
    const { value } = e.currentTarget;
    const { actions } = this.props;

    actions.search(value);
  }

  handleClickOutside() {
    const { value } = this.searchInput.current;

    if (value.length === 0) {
      this.hideSearch();
    }
  }

  render() {
    const { isSearchVisible } = this.state;
    const { alertMessage, isAlertVisible } = this.props;

    return (
      <Fragment>
        <InputsGroup>
          <SearchInput visible={isSearchVisible} type="search" placeholder="Search..." onChange={this.search} id="search" innerRef={this.searchInput} />
          <Label htmlFor="search" onClick={this.showSearch}><FontAwesomeIcon icon={faSearch} /></Label>
          <Add />
        </InputsGroup>
        <AlertSuccess isOpen={isAlertVisible}>{alertMessage}</AlertSuccess>
        <Remove />
      </Fragment>
    );
  }
}

Header.propTypes = {
  alertMessage: PropTypes.string,
  isAlertVisible: PropTypes.bool,
  actions: PropTypes.shape({
    search: PropTypes.func.isRequired,
  }).isRequired,
};

Header.defaultProps = {
  alertMessage: '',
  isAlertVisible: false,
};

export const mapStateToProps = ({ app }) => ({
  alertMessage: app.alertMessage,
  isAlertVisible: app.isAlertVisible,
});

export const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(search, dispatch),
  },
});
