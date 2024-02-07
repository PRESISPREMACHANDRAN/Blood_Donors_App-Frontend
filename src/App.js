
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddDonors from './Components/AddDonors';
import DeleteDonor from './Components/DeleteDonor';

import ViewAllDonors from './Components/ViewAllDonors';
// import SearchDonor from './Components/SearchDonor';


function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' exact element={<AddDonors/>}/>
  <Route path='/delete'  element={<DeleteDonor/>}/>
  {/* <Route path='/search'  element={<SearchDonor/>}/> */}
  <Route path='/viewAll'  element={<ViewAllDonors/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
