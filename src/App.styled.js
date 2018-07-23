import styled from 'styled-components';

export const Dot = styled('div')`
height: 25px;
width: 25px;
background-color: ${({ color }) => color};
border-radius: 50%;
display: inline-block;
`
