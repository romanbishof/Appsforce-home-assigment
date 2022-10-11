import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/addUser/AddUser';
import Users from './components/users/Users';
import { useDispatch } from 'react-redux';
import { getUsersAsync } from './redux/usersSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/add_user' element={<AddUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
