import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img src="image/Desk.jpg" alt="aruna" height="300" className="avatar" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Eroji Aruna</h1>
      <p>
        Front-end web developer. When not coding or preparing a course, I like
        to read books, to cook (and eat), take care of plants, or just sit and
        enjoy the sunset.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="#d9f99d" />
      <Skill skill="Git and GitHub" emoji="👍" color="orangered" />
      <Skill skill="React" emoji="💪" color="#0ea5e9" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
