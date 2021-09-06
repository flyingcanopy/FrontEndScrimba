import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserNameContextProvider from './UserNameContextProvider';


ReactDOM.render(

   <UserNameContextProvider value={"First app using context"}><App/></UserNameContextProvider>
  ,
  document.getElementById('root')
);


