import './App.css'
import './index.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero /> 
              <MainLayout>
                <Home />
              </MainLayout>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

