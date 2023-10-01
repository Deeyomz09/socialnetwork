import React, { useEffect } from 'react';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage);
    }

    store.dispatch(loadUser);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="register"
            element={<Register />}
          />
          <Route
            path="login"
            element={<Login />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
