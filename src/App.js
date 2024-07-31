import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import appStore from "./utils/store";
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRoute}>
          <Outlet />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
