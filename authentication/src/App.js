import Signup from './components/RegistrationForm';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <BrowserRouter>
		  <Navbar />
			<Switch>
				<Route exact path="/">
					<Signup />
				</Route>
				<Route path="/Profile">
					<Profile />
				</Route>
			</Switch>
    </BrowserRouter>
  );
}

export default App;
