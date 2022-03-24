import './App.scss';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register';
import Chat from './components/Chat/Chat';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from './components/404/PageNotFound';
import ProtectedRoute from './Router/ProtectedRoute';
import {useSelector} from 'react-redux'

function App() {

  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Chat/>
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;