import './App.css';
import { ToastContainer } from "react-toastify";
import Pages from './pages/Pages'
import Loader from './components/Loader'
import Overlay from './components/Overlay'
import store from './redux/store'
import { Provider } from 'react-redux'
import { useState } from 'react'
import "react-toastify/dist/ReactToastify.css";


function App() {
 
  const [isLoading, setIsLoading]=useState(true);
  setTimeout(()=>{
    setIsLoading(false);
  },5000)
  return (
      <>
      {isLoading ? <Loader />:<><Provider store={store}><Overlay/><Pages /></Provider></>}
    </>
  );
}

export default App;
