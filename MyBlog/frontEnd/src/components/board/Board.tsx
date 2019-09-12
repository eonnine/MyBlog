import React, { FunctionComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IBoard } from './Type';
import styled from 'styled-components';
import { ITd } from './Type';

const Td = styled.td`
  width: ${(props: ITd) => props.width || '100%'};
`;

const Board: FunctionComponent<IBoard> = ({ id, title, visitCount, postDate, pageIndex }) => {
  return (
    <tr>
      <Td width="15%">{id}</Td>
      <Td width="30%"><Link to={`/BoardDetail/${pageIndex}/${id}`}>{title}</Link></Td>
      <Td width="15%">{postDate}</Td>
      <Td width="15%">{visitCount}</Td>
      <Td width="10%"><NavLink to={`/BoardWriter/${id}`} className="button">수정</NavLink></Td>
    </tr>
  )
}

export default Board;