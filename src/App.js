import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, titleFunction] = useState(["남자 코트 추천", "강남 우동 맛집"]);
  let posts = "강남 고기 맛집"
  
  return (
    <div className="App">
      <div className='black-nav'> 
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h2>{ title[0] }</h2>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h2>{ title[1] }</h2>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h2>{ posts }</h2>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
