import classes from "./App.module.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import EachHouse from "./pages/EachHouse/EachHouse";
import Login from "./pages/Login/Login";
import Edit from "./pages/Edit/Edit";
import AllProjects from "./pages/AllProjects/AllProjects";

import axios from "axios";
import uri from "./components/config";

function App() {
  const [pagesTags, setPagesTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [username, setUsername] = useState();

  useEffect(() => {
    let url = uri + "/auth/login";
    axios.defaults.withCredentials = true;

    axios.get(url).then((res) => {
      if (res.data.loggedIn == true) {
        let username = res.data.username;
        setUsername(username);
      }
    });
  }, []);

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pagesTags={pagesTags}
                setPagesTags={setPagesTags}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                username={username}
                setUsername={setUsername}
              />
            }
          />
          <Route
            path="/admin"
            element={<Login username={username} setUsername={setUsername} />}
          />
          <Route
            path="/allprojects"
            element={
              <AllProjects
                pagesTags={pagesTags}
                setPagesTags={setPagesTags}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            }
          />
          <Route
            path="/house/:id"
            element={
              <EachHouse
                pagesTags={pagesTags}
                setPagesTags={setPagesTags}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            }
          />
          {username && <Route path="/edit" element={<Edit />} />}
          <Route
            exact
            path="*"
            element={<Home username={username} setUsername={setUsername} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
