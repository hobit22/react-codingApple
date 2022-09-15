/* eslint-disable */
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, titleFunction] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  function 글변경(){
    var newArray = [...title]; // deep copy // 리액트 대 원칙 
    newArray[0] = "여자 코트 추천"
    newArray.sort();
    titleFunction(newArray);
  }
  return (
    <div className="App">
      <div className='black-nav'> 
        <div>개발 Blog</div>
      </div>
      <button onClick={ 글변경 }>버튼</button>
      <div className='list'>
        <h2>{ title[0] } <span onClick={ ()=>{따봉변경(따봉 + 1)} }>👍</span>{ 따봉 }</h2>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h2>{ title[1] }</h2>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h2 onClick={()=>{setModal(true)}}>{ title[2] }</h2>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
