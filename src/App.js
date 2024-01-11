import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <div className='container my-3'>
            <h2 className='text-center'>NewsMonkey - Top headlines...</h2>

            <div className='d-flex'>
              <p className="h5 me-3">Categories: </p>
              <Link className="nav-link me-2" aria-current="page" to="/"><span className="badge rounded-pill text-bg-secondary">General</span></Link>
              <Link className="nav-link me-2" aria-current="page" to="/business"><span className="badge rounded-pill text-bg-secondary">Business</span></Link>
              <Link className="nav-link me-2" aria-current="page" to="/entertainment"><span className="badge rounded-pill text-bg-secondary">Entertainment</span></Link>
              <Link className="nav-link me-2" aria-current="page" to="/health"><span className="badge rounded-pill text-bg-secondary">Health</span></Link>
              <Link className="nav-link me-2" aria-current="page" to="/science"><span className="badge rounded-pill text-bg-secondary">Science</span></Link>
              <Link className="nav-link me-2" aria-current="page" to="/sports"><span className="badge rounded-pill text-bg-secondary">Sports</span></Link>
              <Link className="nav-link me-2" aria-current="page" to="/technology"><span className="badge rounded-pill text-bg-secondary">Technology</span></Link>
            </div>

            <Routes>
              <Route path="/" element={<News key='home' pageSize={8} country={'us'} category={'general'} />} />
              <Route path="/general" element={<News key='general' pageSize={8} country={'us'} category={'general'} />} />
              <Route exact path="/business" element={<News key='business' pageSize={8} country={'us'} category={'business'} />} />
              <Route exact path="/entertainment" element={<News key='entertainment' pageSize={8} country={'us'} category={'entertainment'} />} />
              <Route exact path="/health" element={<News key='health' pageSize={8} country={'us'} category={'health'} />} />
              <Route exact path="/science" element={<News key='science' pageSize={8} country={'us'} category={'science'} />} />
              <Route exact path="/sports" element={<News key='sports' pageSize={8} country={'us'} category={'sports'} />} />
              <Route exact path="/technology" element={<News key='technology' pageSize={8} country={'us'} category={'technology'} />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}
