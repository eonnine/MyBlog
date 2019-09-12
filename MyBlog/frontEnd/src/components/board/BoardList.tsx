import React, { useEffect, FunctionComponent } from 'react';
import { IBoardList, IBoard } from './Type';
import Board from './Board';

const BoardList: FunctionComponent<IBoardList> = ({ boardList }) => {

  const makeList = () => {
    return boardList.map((board: IBoard) => {
      return <Board
        key={board.id}
        id={board.id}
        title={board.title}
        content={board.content}
        visitCount={board.visitCount}
        postDate={board.postDate}
        updateDate={board.updateDate}
        isPublic={board.isPublic}
      />
    });
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>등록일자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {makeList()}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
