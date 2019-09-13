import React, { useState, FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { IPutBoard, IBoardWriterProps } from './Type';
import { useMutation } from 'react-apollo-hooks';
import Queries from './Queries';

const BoardPoster: FunctionComponent<RouteComponentProps<IBoardWriterProps>> = ({ match, history }) => {

  const id = Number(match.params.id);
  const postData: IPutBoard = {
    id: id || 0,
    title: '',
    content: '',
    isPublic: false
  };

  const [ state, setState ] = useState(postData);
  const [ postBoard] = useMutation(Queries.POST_BOARD);
  const [ patchBoard ] = useMutation(Queries.PATCH_BOARD);

  // 공개 여부 체크박스 이벤트
  const onCheckboxClick = (e: React.MouseEvent) => {
    setState({ 
      ...state,
      isPublic: !state.isPublic
    });
  };

  // 작성 폼 입력 시 데이터 변경 이벤트
  const onChangeState = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };
  
   // 신규 게시글 작성
  const onPostBoard = async () => {
    if( !validator() ) return false;

    const { title, content, isPublic } = state;
    try {
      const response = await postBoard({ variables: { title, content, isPublic } });
      afterSave(response.data.postBoard.id);
    } catch(error) {
      alert('에러가 발생했습니다. 에러 코드: 001');
      console.error(error.message);
    }
  };

  // 기존 게시글 수정
  const onPatchBoard = async () => {
    if( !validator() ) return false;

    const { id, title, content, isPublic } = state;
    try{
      const response = await patchBoard({ variables: { id, title, content, isPublic } });
      afterSave(response.data.patchBoard.id);
    } catch(error) {
      alert('에러가 발생했습니다. 에러 코드: 002');
      console.error(error.message);
    }
  };

  const validator = () => {
    const { title, content } = state;
    if( !title || !content ){
      alert('제목과 내용을 입력하세요');
      return false;
    }
    return true;
  };

  const afterSave = (id: number) => {
    if( id > 0 ){
      alert('저장되었습니다');
      history.push("/Board/0");
    } else {
      alert('저장되지 않았습니다. 다시 시도해주세요.');
    }
  }
  
  // 페이지 벗어날 때 확인
  const onLeavePage = () => {
    if( !confirm('작성 중이던 내용이 사라집니다. 정말 나가시겠습니까?') ){
      return false;
    }
    history.push("/Board/0");
  }

  return (
    <section id="intro" className="wrapper style1 fullscreen">
      <div className="inner">
        <section>
          <h3>글쓰기</h3>
          <form action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" id="title" value={state.title} onChange={onChangeState} placeholder="Title" />
              </div>
              <div className="col-4 col-12-small">
                <input type="checkbox" checked={state.isPublic} onChange={()=>{}} />
                <label onClick={onCheckboxClick}>공개</label>
              </div>
              <div className="col-12">
                <textarea id="content" value={state.content} onChange={onChangeState} placeholder="Content"></textarea>
              </div>
            </div>
          </form>
          <ul className="actions">
            <li><a href="#" className="button" onClick={onLeavePage}>목록</a></li>
            <li><a href="#" className="button" onClick={ ( id == 0 ) ? onPostBoard : onPatchBoard}>작성</a></li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default BoardPoster;