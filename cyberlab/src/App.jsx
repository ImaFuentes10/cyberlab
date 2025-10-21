import './App.css'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Pdf from './pages/pdf.jsx'

function App() {
 return (
    <BrowserRouter>
      <Routes>
        {/* Redirige de "/" a "/CyberLab/omedec/p.php?s=..." */}
        <Route
          path="/"
          element={
            <Navigate
              to="/CyberLab/omedec/p.php?s=tEQTdUUdTvW1cbDMZvfn%252BtzA9l84SZAGdkx5sZgtJ2c%253D"
              replace
            />
          }
        />

        {/* Ruta destino */}
        <Route path="/CyberLab/omedec/p.php" element={<Pdf />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App
