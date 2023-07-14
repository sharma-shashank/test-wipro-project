import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TableContainer from './components/TableContainer';
import { userList } from './components/apis/ApiConstants';
import { AnyNsRecord } from 'dns';
import { UserForm } from './components/UserForm';

interface IUserData {
  name: string;
  company: string;
  email: string;
  city: string;
}



function App() {
  const [userData, setUserData] = useState<Array<any>>([]);

  useEffect(() => {
    try {
      fetch(userList).then((val) => val.json()).then(response => setUserData(response));
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  return (
    <div className="App">
      {<TableContainer rowData={userData}/>}
      {<UserForm data={userData} setData={setUserData}/>}
    </div>
  );
}

export default App;
