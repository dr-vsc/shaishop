import './App.css';
// import Loader from './components/Loader/Loader';
import Home from './pages/Home';
// import {isLoding} from './pages/Home';
// import TodoConntext from './contexts/TodoConntext';
import TodoDetails from './pages/TodoDetails';
import { Route,Routes,Link,  } from 'react-router-dom';

// import {  useContext } from 'react';

function App() {
// const {id}=  useParams()
// const {isLoding}=useContext(TodoConntext)
// console.log(Products);
  return (
  
  <>
     {/* {isLoding ? <Loader  /> : */}
 
  <div className='App'>
      <Link to={'/'}>Home</Link>
     <br/>
     {/* <Link to={"/products/${productId}"}>TodoDetails</Link> */}
  <Routes>
  <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<TodoDetails/>} />
 </Routes>
 </div>
      
  </>);
}



export default App;

