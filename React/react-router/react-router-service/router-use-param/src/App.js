
import './App.css';
import ServiceList from './ServiceList';
import { BrowserRouter ,Route } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
function App() {
  return (
<BrowserRouter>
    <div>
     <Route path="/" >
         <ServiceList/>
     </Route>
     <Route path="/service/:serviceId">
        <ServiceDetails/>
     </Route>
    </div>
</BrowserRouter>
    
  );
}

export default App;
