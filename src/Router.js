import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomeCoches from "./components/HomeCoches";
import MenuCoches from "./components/MenuCoches";
import CreateCoches from "./components/CreateCoches";
import UpdateCoche from "./components/UpdateCoche";
import Details from "./components/Details";

export default class Router extends Component {
  render() {
    function UpdateCocheElement() {
      var { idcoche } = useParams();
      return <UpdateCoche idcoche={idcoche} />;
    }
    function DetailsElement() {
      var { idcoche } = useParams();
      return <Details idcoche={idcoche} />;
    }
    return (
      <BrowserRouter>
        <MenuCoches />
        <Routes>
          <Route path="/" element={<HomeCoches />} />
          <Route path="/createcoches" element={<CreateCoches />} />
          <Route
            path="/updatecoche/:idcoche"
            element={<UpdateCocheElement />}
          />
          <Route path="/details/:idcoche" element={<DetailsElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
