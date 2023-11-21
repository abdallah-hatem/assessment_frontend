import Home from "./pages/home";
import Login from "./pages/login";
import { ReactElement, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";

interface RoutesDto {
  path: string;
  element: ReactElement;
}

function App() {
  const routes: RoutesDto[] = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
  ];

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              {routes.map((el, index) => (
                <Route path={el.path} element={el.element} key={index} />
              ))}
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
