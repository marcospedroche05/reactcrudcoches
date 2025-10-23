import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CreateCoches extends Component {
  cajaid = React.createRef();
  cajamarca = React.createRef();
  cajamodelo = React.createRef();
  cajaconductor = React.createRef();
  cajaimagen = React.createRef();
  url = Global.urlCoches;
  crearCoche = (event) => {
    event.preventDefault();
    var request = "api/Coches/InsertCoche";
    var id = parseInt(this.cajaid.current.value);
    var coche = {
      idCoche: id,
      marca: this.cajamarca.current.value,
      modelo: this.cajamodelo.current.value,
      conductor: this.cajaconductor.current.value,
      imagen: this.cajaimagen.current.value,
    };
    axios.post(this.url + request, coche).then((response) => {
      this.setState({
        status: true,
      });
    });
  };
  state = {
    status: false,
  };
  render() {
    return (
      <div className="p-5">
        {this.state.status == true && <Navigate to="/" />}
        <h1>Create coches</h1>
        <br />
        <form onSubmit={this.crearCoche}>
          <label>ID coche: </label>
          <input type="number" ref={this.cajaid} className="form-control" />
          <br />
          <label>Marca: </label>
          <input type="text" ref={this.cajamarca} className="form-control" />
          <br />
          <label>Modelo: </label>
          <input type="text" ref={this.cajamodelo} className="form-control" />
          <br />
          <label>Conductor: </label>
          <input
            type="text"
            ref={this.cajaconductor}
            className="form-control"
          />
          <br />
          <label>Imagen: </label>
          <input type="text" ref={this.cajaimagen} className="form-control" />
          <br />
          <button className="btn btn-success text-white">Crear coche</button>
        </form>
      </div>
    );
  }
}
