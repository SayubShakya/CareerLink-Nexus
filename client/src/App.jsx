import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import { ROUTES } from '@/constants/routes';
import '@/styles/variables.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        {/* Add more routes as you create pages */}
      </Routes>
    </Router>
  );
}

export default App;
