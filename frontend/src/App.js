import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import AdminPanel from './components/admin/AdminPanel';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getUser, loadUser } from './actions/user';
import Timeline from "./components/admin/Timeline";
import Project from "./components/admin/Project"


function App() {

  //REDUX .. getUser from Actions file
  const dispatch = useDispatch();

  //fetch elements from store 
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  //when user opens website by deafult he will be logged in 
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);


  return (
    <Router>
      {loading ? <div>Loading</div> :
        (<>
          <Header />
          <Routes>
            <Route path="/" element={
              <Home
                timelines={user.timeline}
                skills={user.skills}
              />
            } />
            <Route path="/about" element={
              <About about={user.about} />
            } />
            <Route path="/projects" element={
              <Projects projects={user.projects} />
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
            <Route path="/admin/timeline" element={isAuthenticated ? <Timeline /> : <Login />} />
            <Route path="/admin/project" element={isAuthenticated ? <Project /> : <Login />} />
          </Routes>
          <Footer />
        </>)
      }
    </Router>
  );
}

export default App;
