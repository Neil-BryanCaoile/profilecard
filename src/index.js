import React from 'react';
import ReactDom from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  const linkedInProfileUrl = `https://media.licdn.com/dms/image/D5603AQHGziOVGAVjAw/profile-displayphoto-shrink_800_800/0/1686440218415?e=1692835200&v=beta&t=QvdvlBpg10m892MH1jxqr41H2Av8jzhT-g4XbvuJADc`;
  return (
    <img
      className="avatar"
      src={linkedInProfileUrl}
      alt="Neil Bryan Caoile"
    ></img>
  );
}
function Intro() {
  return (
    <div>
      <h1>Neil Bryan Caoile</h1>
      <p>
        Recent graduate with a strong computer systems background and a passion
        for web technologies, databases, and network security. Skilled in
        collaborating within agile teams, identifying and resolving application
        issues, and documenting solutions. Proficient in Java, JavaScript, C,
        and C#, continuously adapting to emerging technologies. Experienced in
        technical support and improving user experiences through continuous
        learning.
      </p>
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <li className="skill" style={{ backgroundColor: `${color}` }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </li>
  );
}
function SkillList() {
  return (
    <ul className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#1abc9c" />
      <Skill skill="JavaScript" emoji="💪" color="#2ecc71" />
      <Skill skill="React" emoji="💪" color="#9b59b6" />
      <Skill skill="Git and GitHub" emoji="💪" color="#3498db" />
    </ul>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
