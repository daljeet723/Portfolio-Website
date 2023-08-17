import './App.css';
import {BrowserRouter as Router, Route, Routes}from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
function App() {
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
