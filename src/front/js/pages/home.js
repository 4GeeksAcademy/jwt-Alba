import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions} = useContext(Context)

  return (
    <div className="container-fluid p-5">
			<h1 className="mx-auto display-4 ms-5 d-flex justify-content-center text-white" >Developers</h1>
			<div className="card jumbotron ms-5 mt-5 d-flex " style={{ width: 35 + "rem" }}>
				<img src="https://thumbs.dreamstime.com/b/hola-mundo-letras-dibujadas-mano-del-vector-aislado-en-el-fondo-blanco-dise%C3%B1o-para-las-tarjetas-de-felicitaci%C3%B3n-d%C3%ADa-fiesta-144461394.jpg" />
				<a className="btn btn-dark border-solid-dark btn-sm" href="https://www.linkedin.com/in/alba-rodr%C3%ADguez-594910198/" target="blank" role="button">LinkedIn</a>
				

			</div>
			<span className="texto-j d-flex justify-content-center mt-5 mr-5 text-white"><strong></strong></span>

		
		</div>
  );
};