import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Dot = styled('div')`
    text-align: center;
    color: white;
    height: 25px;
    width: 25px;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    display: inline-block;
`;

const Svg = styled('svg')`
    margin: 0 6px;
`;

export const SortIcon = ({ width, height, up, down }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 37 37">
    <g>
      <path d="M7 17h22a1 1 0 0 0 1-1L18 0h-1L7 16v1z" fill={up ? 'black' : 'gray'} />
      <path d="M30 20v1L19 36v0L7 21v-1h23z" fill={down ? 'black' : 'gray'} />
    </g>
  </Svg>
);

SortIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  up: PropTypes.bool.isRequired,
  down: PropTypes.bool.isRequired,
};
