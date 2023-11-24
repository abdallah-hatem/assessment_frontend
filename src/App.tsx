import Home from "./pages/home";
import Login from "./pages/login";
import { ReactElement, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";
import { useTranslation } from "react-i18next";

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

  const { i18n } = useTranslation();
  if (i18n.language === "en-US") {
    i18n.init();
    document.documentElement.setAttribute("lang", "en");
    i18n.changeLanguage("en");
  }

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
