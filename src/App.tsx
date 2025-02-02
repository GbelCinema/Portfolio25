import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProjectPage from './Pages/Project/Project';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio25/" element={<Home />} />
        <Route path="/Portfolio25/Project/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
