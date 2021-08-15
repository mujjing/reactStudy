import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 교육']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남고기맛집';

function changeTitle() {
  if(글제목[0] == '남자 코트 추천') {
    글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 교육']);
  }else{
    글제목변경(['남자 코트 추천', '강남 우동 맛집', '파이썬 교육']);
  }
  
}

  return (
    <div className="App">
      <div className="black_nav">
        <div style={ { color:'yellow', fontSize : '30px' } }>개발 Blog</div>
      </div>
      <button onClick={()=>{ changeTitle() }}>버튼</button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={()=>{ 따봉변경( 따봉 + 1 ) }}>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 20일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 27일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
