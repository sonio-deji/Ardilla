import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Homepage from "./pages/Homepage"
import InterestCalculator from "./pages/InterestCalculator"
import CareerPage from "./pages/CareerPage"

function App() {
  const router  = createBrowserRouter(
    [
      {
      path: '/',
      element: (
        <Homepage />
      )
    },
    {
      path: '/interest-calculator',
      element: (
        <InterestCalculator />
      )
    },
    {
      path: '/career-page',
      element: (
        <CareerPage />
      )
    }
  ]
  )
  return (
 <RouterProvider router={router} />
  );
}

export default App;
