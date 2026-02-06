import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/index';
import '@/styles/variables.css';
import '@/styles/global.css'; // Import global CSS
import './index.css';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
