import React from 'react';
import styled from 'styled-components';
import { Alert, Input } from 'reactstrap';

export const InputsGroup = styled('div')`
    display: flex;
    height: calc(1.5em + 1.5rem);
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 2px solid #dee2e6;
`

export const Label = styled('label')`
    padding: .75rem;
    margin: 0;
    position: absolute;
    ${({right}) => right && `right: 0;`}
    ${({left}) => left && `left: 0;`}
`

const BaseInput = styled(Input)`
    align-items: stretch;
    background-clip: padding-box;
    border-radius: .25rem;
    display: inline-block;
    width: 0;
    padding: 0;
    border: none;

    ${({visible}) => visible && `
        border: 1px solid #ced4da;
        padding: .375rem .75rem;
        width: 100%;

        & ~ label {
            display: none;
        }
    `}
`

export const SearchInput = BaseInput

export const AddInput = BaseInput

export const Dot = styled('div')`
    height: 25px;
    width: 25px;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    display: inline-block;
`

export const SortIcon = ({ width, height, up, down }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 37 37">
        <g>
            <path d="M7 17h22a1 1 0 0 0 1-1L18 0h-1L7 16v1z" fill={up ? 'black' : 'gray'} />
            <path d="M30 20v1L19 36v0L7 21v-1h23z" fill={down ? 'black' : 'gray'} />
        </g>
    </svg>
)

export const AlertSuccess =  styled(Alert).attrs({
    color: "success",
})`
    position: absolute;
    width: 100%;
    text-align: center;
    top: 0;
`