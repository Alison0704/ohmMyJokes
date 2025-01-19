import { SignedInOrRedirect, SignedOut, SignedOutOrRedirect, Provider } from "@gadgetinc/react";
import { Suspense, useEffect } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate, Link } from "react-router";
import { api } from "../api";
import "./App.css";

const App = () => { useEffect(() => { document.title = `${process.env.GADGET_APP}`;
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}></Route>
    )
  );
  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

const Layout = () => {
  const navigate = useNavigate();
  return (
    <Provider api={api} navigate={navigate} auth={window.gadgetConfig.authentication}>
      <Header />
      <div className="app">
        <div className="app-content">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </Provider>
  );
};

const Header = () => {
  return (
    <div className="header">
      <a href="/" target="_self" rel="noreferrer" style={{ textDecoration: "none" }}>
        <div className="logo">{process.env.GADGET_APP}</div>
      </a>
    </div>
  );
};

export default App;
