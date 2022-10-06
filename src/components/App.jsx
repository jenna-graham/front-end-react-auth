import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';

//   import Dashboard from './Dashboard/Dashboard.jsx';
  import Auth from './Auth/Auth.jsx';
  import UserProvider from '../state/UserContext';

export default function App() {
  return (
    <Router>
        <UserProvider>
        <Routes>
            <Route index element={<Auth />}>
            
            </Route>
        </Routes>
        </UserProvider>
    </Router>
    
  )
}
