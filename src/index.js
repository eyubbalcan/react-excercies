import React from "react";
import ReactDOM from "react-dom/client";
import RandomNumber from "./pages/RandomNumber";
import ImgChange from "./pages/ImgChange";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import TodoList from "./pages/TodoList";
import RandomOzluSoz from "./pages/RandomOzluSoz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<Layout />} />
        <Route path="randomnumber" element={<RandomNumber />} />

        <Route path="imgchange" element={<ImgChange />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="randomozlu" element={<RandomOzluSoz />} />

      </Route>
    </Routes>
  </BrowserRouter>
);
