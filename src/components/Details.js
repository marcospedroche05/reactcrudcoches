import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class Details extends Component {
  url = Global.urlCoches;
  loadCoche = () => {
    var request = "api/Coches/FindCoche/" + this.props.idcoche;
    axios.get(this.url + request).then((response) => {
      this.setState({
        coche: response.data,
      });
    });
  };
  state = {
    coche: null,
  };
  componentDidMount = () => {
    this.loadCoche();
  };
  render() {
    return (
      <div>
        <h1>Detalles de coche</h1>
        {this.state.coche != null && (
          <ul className="list-group">
            <li className="bg-success">ID coche: </li>
            <li className="list-group-item">{this.state.coche.idCoche}</li>
            <li className="bg-success">Marca: </li>

            <li className="list-group-item">{this.state.coche.marca}</li>
            <li className="bg-success">Modelo: </li>

            <li className="list-group-item">{this.state.coche.modelo}</li>
            <li className="bg-success">Conductor: </li>

            <li className="list-group-item">{this.state.coche.conductor}</li>
            <li className="bg-success">URL imagen: </li>

            <li className="list-group-item">{this.state.coche.imagen}</li>
          </ul>
        )}
      </div>
    );
  }
}
