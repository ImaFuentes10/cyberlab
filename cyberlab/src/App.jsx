import './App.css'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Pdf from './pages/Pdf.jsx'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' 
          element={<Navigate to='/CyberLab/omedec/p.php?s=tEQTdUUdTvW1cbDMZvfn%252BtzA9l84SZAGdkx5sZgtJ2c%253D' replace />} />
          <Route path='/CyberLab/omedec/p.php' element={<Pdf /> } />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
