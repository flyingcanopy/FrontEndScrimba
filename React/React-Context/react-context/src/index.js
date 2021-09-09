import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UserNameContextProvider} from './UserNameContextProvider';


ReactDOM.render(

   <UserNameContextProvider><App/></UserNameContextProvider>
  ,
  document.getElementById('root')
);


