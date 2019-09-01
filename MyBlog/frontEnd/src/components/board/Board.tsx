import React, { FunctionComponent } from 'react';
import { IBoard } from './Type';

const Board: FunctionComponent<IBoard> = ({ id, title, visitCount, postDate }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{postDate}</td>
      <td>{visitCount}</td>
    </tr>
  )
}

export default Board;