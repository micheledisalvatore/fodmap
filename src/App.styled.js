import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Alert, Input } from 'reactstrap';

export const InputsGroup = styled('div')`
  display: flex;
  height: calc(1.5em + 0.9rem);
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 2px solid #dee2e6;
`;

export const Label = styled('label')`
  padding: 0.45rem .75rem;
  margin: 0;
  ${({ right }) => right && 'right: 0;'}
  ${({ left }) => left && 'left: 0;'}
`;

export const SearchInput = styled(Input)`
  align-items: stretch;
  background-clip: padding-box;
  border-radius: .25rem;
  border: none;
  display: inline-block;
  padding: 0;
  position: absolute;
  width: 0;

  ${({ visible }) => visible && `
    border: 1px solid #ced4da;
    padding: .375rem .75rem;
    width: 100%;

    & ~ label {
      display: none;
    }
  `}
`;

SearchInput.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export const Dot = styled('div')`
  height: 25px;
  width: 25px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: inline-block;
`;

export const AlertSuccess = styled(Alert).attrs({
  color: 'success',
})`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
`;
