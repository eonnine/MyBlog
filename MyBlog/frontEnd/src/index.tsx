import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import App from './App';

declare global {
  namespace NodeJS {
    interface Global {
      renderServer: Function;
    }
  }
}

// client에서 호출했을 때는 DOM 렌더링
if(typeof window !== 'undefined' && typeof document !== 'undefined'){
  ReactDOM.render(<App />, document.getElementById('root'))

// server에서 호출했을 때는 toString 함수 정의
} else {
  global.renderServer = () => (
    renderToString(<App />)
  );
}