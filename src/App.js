import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter} from 'react-router';
import { RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import SearchVideos from './components/SearchVideos';
import ErrorPage from './utils/ErrorPage';

function App() {

const appRouter = createBrowserRouter([{
 

  path : "/",
  element:<Body></Body>,
  errorElement:<ErrorPage></ErrorPage>,
  children: [
    {
    path : "/",
    element:<MainContainer></MainContainer>,
    } ,

   {
  path : "watch",
  element:<WatchVideo></WatchVideo>,
  },
  {
    path:"/results",
    element:<SearchVideos></SearchVideos>,

  },

]

}]
,  {
  path:"*",
  element:<ErrorPage></ErrorPage>
},)

  return (

    <Provider store={appStore}>
    <div>   
    
      <RouterProvider router={appRouter}>
   
    
      </RouterProvider>
   
    </div>
    </Provider>
   
  );
}

export default App;
