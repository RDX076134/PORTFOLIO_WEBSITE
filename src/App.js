import React from 'react';
import Aboutme from './about me';
import './App.css';
import Navbar from './navbar';
import Titlesec from './title';
import Footersec from './footer'
import Projectsec from './projectsection';
import Blogsec from './blogsection';
import Techstack from './techstack';
import Recsection from './recsection';

function App() {
  return (
    <div>
      <Navbar/>
      <Titlesec />
      <Recsection />
      <Techstack />
      <Projectsec />
      <Aboutme />
      <Blogsec />
      <Footersec />
    </div>
  );
} 

export default App;
