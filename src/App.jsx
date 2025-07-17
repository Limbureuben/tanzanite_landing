import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './views/sharing/LandingPage';
import { GlobalStyles } from '@mui/material';



<GlobalStyles styles={{
  'html, body, #root': {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  '*': {
    boxSizing: 'border-box',
  }
}} />

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>

  )
}

export default App
