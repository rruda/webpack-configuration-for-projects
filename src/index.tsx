import {createRoot} from 'react-dom/client'
import App from './app/app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from './pages/about/About.lazy';
import { Suspense } from 'react';

const root = document.getElementById('root');
const container  = createRoot(root);


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<h1>Page not found</h1>,
      children:[
        {
          path: "/about",
          element: <Suspense fallback={<>Loading...</>}> <LazyAbout/></Suspense>,
        }
      ]
    },
  ]);

  
container.render(
    <RouterProvider router={router}/>
);