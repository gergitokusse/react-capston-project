import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchItem } from './redux/Slice/ItemSlice';
import NavigationBar from './components/Navigation';
import './App.css';
import Home from './components/HomePage';
import Details from './components/ItemDetaile/details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItem());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="header">
        <NavigationBar />
      </div>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="details" element={<Details />} />
          {/*
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
