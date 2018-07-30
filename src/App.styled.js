import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Alert, Input } from 'reactstrap';

export const InputsGroup = styled('div')`
    display: flex;
    height: calc(1.5em + 1.5rem);
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 2px solid #dee2e6;
`;

export const Label = styled('label')`
    padding: .75rem;
    margin: 0;
    position: absolute;
    ${({ right }) => right && 'right: 0;'}
    ${({ left }) => left && 'left: 0;'}
`;

const BaseInput = styled(Input)`
    align-items: stretch;
    background-clip: padding-box;
    border-radius: .25rem;
    display: inline-block;
    width: 0;
    padding: 0;
    border: none;

    ${({ visible }) => visible && `
        border: 1px solid #ced4da;
        padding: .375rem .75rem;
        width: 100%;

        & ~ label {
            display: none;
        }
    `}
`;

BaseInput.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export const SearchInput = BaseInput;

export const AddInput = BaseInput;

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
