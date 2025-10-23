import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Global from "../Global";

export default class UpdateCoche extends Component {
  cajaid = React.createRef();
  cajamarca = React.createRef();
  cajamodelo = React.createRef();
  cajaconductor = React.createRef();
  cajaimagen = React.createRef();
  url = Global.urlCoches;
  loadCoche = () => {
    var request = "api/Coches/FindCoche/" + this.props.idcoche;
    var coche = {};
    axios.get(this.url + request).then((response) => {
      coche = response.data;
      this.setState({
        coche: response.data,
      });
      this.cajaid.current.value = coche.idCoche;
      this.cajamarca.current.value = coche.marca;
      this.cajamodelo.current.value = coche.modelo;
      this.cajaconductor.current.value = coche.conductor;
      this.cajaimagen.current.value = coche.imagen;
    });
  };
  updateCoche = (event) => {
    event.preventDefault();
    var request = "api/Coches/UpdateCoche";
    var id = parseInt(this.cajaid.current.value);
    var coche = {
      idCoche: id,
      marca: this.cajamarca.current.value,
      modelo: this.cajamodelo.current.value,
      conductor: this.cajaconductor.current.value,
      imagen: this.cajaimagen.current.value,
    };
    axios.put(this.url + request, coche).then((response) => {
      this.setState({
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.loadCoche();
  };
  state = {
    coche: {},
    status: false,
  };
  render() {
    return (
      <div className="p-5">
        {this.state.status == true && <Navigate to="/" />}
        <h1>Actualizar coche</h1>
        <form onSubmit={this.updateCoche}>
          <label>ID coche: </label>
          <input
            type="number"
            ref={this.cajaid}
            className="form-control"
            readOnly
            disabled
          />
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
          <button className="btn btn-warning text-white">Modificar</button>
        </form>
      </div>
    );
  }
}
