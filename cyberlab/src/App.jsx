import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Pdf from './pages/Pdf'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/CyberLab/omedec/p.php?s=tEQTdUUdTvW1cbDMZvfn%252BtzA9l84SZAGdkx5sZgtJ2c%253D' replace />} />
        <Route path='/CyberLab/omedec/p.php?s=tEQTdUUdTvW1cbDMZvfn%252BtzA9l84SZAGdkx5sZgtJ2c%253D' element={<Pdf />} />
      </Routes>
    </div>
  )
}

export default App
