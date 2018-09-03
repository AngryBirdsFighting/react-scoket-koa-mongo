import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'  
import registerServiceWorker from './registerServiceWorker';

const BaseLayout = () => (
    <div className="base">
      <header>
        <p>React Router v4 Browser Example</p>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={'/about/'+' 2 ' }>About</Link></li>
            <li><Link to="/me">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <Route path="/" exact component={App} />
        <Route path="/about/:location" component={Text} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/me" component={ProfilePage} />
        <Redirect to='/'></Redirect>
      </div>
      <footer>
        React Router v4 Browser Example (c) 2017
      </footer>
    </div>
  ) 
  class Text  extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          console.log(this.props)
          return <div>{this.props.match.params.location}</div>
      }
  }
  const HomePage = () => <div>This is a Home Page</div>
  const LoginPage = () => <div>This is a Login Page</div>
  const RegisterPage = () => <div>This is a Register Page</div>
  const ProfilePage = () => <div>This is a Profile Page</div>
  const AboutPage = () => <div>This is a About Page</div>
  const ContactPage = () => <div>This is a Contact Page</div>

  const Bpp = () => (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  )
ReactDOM.render(
    <Bpp/>
    ,
     document.getElementById('root')
    );
registerServiceWorker();
