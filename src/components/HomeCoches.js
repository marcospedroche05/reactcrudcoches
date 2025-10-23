import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import imagenLoad from "../assets/images/loadingscreen.jpg";
import { NavLink } from "react-router-dom";

export default class HomeCoches extends Component {
  url = Global.urlCoches;
  loadCoches = () => {
    var request = "api/Coches";
    axios.get(this.url + request).then((response) => {
      this.setState({
        coches: response.data,
        status: true,
      });
    });
  };
  eliminarCoche = (id) => {
    var request = "api/Coches/DeleteCoche/" + id;
    axios.delete(this.url + request).then((response) => {
      window.location.reload();
    });
  };
  state = {
    coches: [],
    status: false,
  };
  componentDidMount = () => {
    this.loadCoches();
  };
  render() {
    return (
      <div>
        {this.state.status == false ? (
          <img
            src={imagenLoad}
            className="position-absolute start-0 top-0 w-100 h-100"
          />
        ) : (
          <>
            <h1>Home coches</h1>
            <br />
            <table className="table table-striped table-hover">
              <thead>
                <th>Id coche</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </thead>
              <tbody>
                {this.state.coches.map((coche, index) => {
                  return (
                    <tr key={index}>
                      <td>{coche.idCoche}</td>
                      <td>{coche.marca}</td>
                      <td>{coche.modelo}</td>
                      <td>{coche.conductor}</td>
                      <td>
                        <img src={coche.imagen} style={{ width: "200px" }} />
                      </td>
                      <td>
                        <NavLink
                          className="btn btn-success text-white"
                          to={"/details/" + coche.idCoche}
                        >
                          Detalles
                        </NavLink>
                        <NavLink
                          className="btn btn-warning text-white"
                          to={"/updatecoche/" + coche.idCoche}
                        >
                          Modificar
                        </NavLink>
                        <button
                          className="btn btn-danger text-white"
                          onClick={() => {
                            this.eliminarCoche(coche.idCoche);
                          }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    );
  }
}
