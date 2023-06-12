import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={ <p>Home</p> } />
          <Route path="/messages" element={<p>Hello</p>} />
      </Routes>
    </>
  );
};
