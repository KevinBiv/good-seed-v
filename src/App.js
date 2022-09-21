import './App.css';
import LandingPage from './ui/pages/landing-page/landing-page';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './ui/pages/signup/signup';
import SignIn from './ui/pages/signin/signin';
import RegisterSeed from './ui/pages/register-seed/register-seed';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <SignUp /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register-seed' element={<RegisterSeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;