import './App.css';
import CourseForm from './components/courseForm';
import RegForm from './components/RegForm';
import AddstudentForm from './components/AddstudentForm';
import DisplayStudents from './components/DisplayStudents';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as  Route, Switch, BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import DisplayCourses from './components/DisplayCourses';
import LoginForm from './components/loginForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/AddstudentForm">
            <AddstudentForm/>
          </Route>
          <Route path="/DisplayStudents">
            <DisplayStudents/>
          </Route>
          <Route path="/CourseForm">
            <CourseForm/>
          </Route>
          <Route path="/DisplayCourses">
            <DisplayCourses/>
          </Route>
          <Route path="/RegForm">
            <RegForm/>
          </Route>
          <Route path="/LoginForm">
            <LoginForm/>
          </Route>
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;