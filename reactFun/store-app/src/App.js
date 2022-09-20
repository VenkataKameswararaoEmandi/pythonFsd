// import React, { useEffect } from "react";
// import MakeRequest from "./utils/apiHandler";

// function App() {
//   async function apiCall() {
//     await MakeRequest("http://127.0.0.1:5000/store/1").put({
//       name: "Geol Store",
//     });
//     await MakeRequest("http://127.0.0.1:5000/store/1").get();
//   }

//   useEffect(() => {
//     apiCall();
//   }, []);

//   return <div className="App"></div>;
// }

// export default App;

import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (location.pathname !== "/" && !token) {
      navigate("/loginPage");
    }
  }, []);

  return (
    <Routes>
      {AppRoutes.map((appRoute) => (
        <Route path={appRoute.path} element={appRoute.comp} />
      ))}
    </Routes>
  );
}

export default App;
