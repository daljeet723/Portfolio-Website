import './App.css';
import {BrowserRouter as Router, Route, Routes}from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import {useDispatch} from "react-redux"
import { useEffect } from 'react';
import { getUser, loadUser } from './actions/user';


function App() {

  //REDUX .. getUser from Actions file
  const dispatch = useDispatch();

  //when user opens website by deafult he will be logged in 
  useEffect(()=>{
    dispatch(getUser());
    dispatch(loadUser());
  },[dispatch ]);


  return (
    <Router>
    <Header/>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ="/projects" element ={<Projects/>}/>
        <Route path ="/contact" element ={<Contact/>}/>
        <Route path ="/account" element ={<Login/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
