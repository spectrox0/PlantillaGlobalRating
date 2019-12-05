import React, { useState, useEffect } from "react";
import { initGA } from "./helpers/initGA.js";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/headers/Header Nosotros.jpg";
export default function() {
  React.useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <Header urlImage={ImgHeader} />
      <div className="page-nosotros">
        <MDBContainer>
          <MDBRow className="title">
            <h1>Sobre Nosotros</h1>{" "}
          </MDBRow>
          <MDBRow>
            <MDBCol sm="5">
              <div className="img-logo">
                <img
                  src={require("../assets/img/Linea de tiempo.png")}
                  alt="Linea de Tiempo"
                />
              </div>
            </MDBCol>
            <MDBCol sm="7">
              <p>
                <b>Global Ratings Sociedad Calificadora de Riesgo,</b> inicia
                sus operaciones en el año 1994 y se convierte en la primera
                Sociedad Calificadora de Riesgo autorizada por la Comisión
                Nacional de Valores de Venezuela (actualmente Superintendencia
                Nacional de Valores), según Resolución Nº 057-94 de fecha 08 de
                Marzo del mismo año. Durante más de 25 años han sido calificadas
                emisiones de Papeles Comerciales, Obligaciones Quirografarias,
                Títulos de Participación y Acciones Preferidas de un número
                importante de empresas públicas y privadas de diferentes
                sectores de la economía (Industrias, Servicio, Comercio, Bancos,
                Casas de Bolsa y Sucursales de Bancos Extranjeros, entre otros).
              </p>

              <p>
                En Global Ratings SCR contamos con profesionales con experiencia
                en análisis económico-financiero para evaluar, sustentar y
                calificar la capacidad de pago de emisiones de títulos de deuda,
                de acuerdo a la normativa respectiva y a la metodología de
                calificación debidamente autorizada por la Superintendencia
                Nacional de Valores.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol sm="3">
              <MDBRow>
                <div className="title">
                  <h3> Misión </h3>
                </div>
                <p>
                  Dar una opinión profesional, especializada, objetiva e
                  independiente sobre la calidad crediticia de un determinado
                  instrumento de deuda, así como de la capacidad de pago de las
                  empresas e instituciones, públicas o privadas, nacionales o
                  internacionales, que los emitan, a través de la recopilación,
                  organización y análisis de toda la información disponible en
                  el mercado, además de aquella proporcionada por el emisor.
                </p>
              </MDBRow>
              <MDBRow>
                <div className="title">
                  <h3> Visión </h3>
                </div>

                <p>
                  Ser la calificadora de riesgo líder del mercado, con la mejor
                  reputación y la opinión más oportuna y acertada.
                </p>
              </MDBRow>
            </MDBCol>

            <MDBCol sm="9" className="col-nosotros">
              <MDBRow>
                <div className="title">
                  <h3> Valores </h3>
                </div>
                <ul>
                  <li>
                    <p>
                      <b>Calidad e integridad del proceso de calificación:</b>
                      Nos esforzamos para que nuestras opiniones ayuden a
                      reducir las asimetrías de información de los participantes
                      en el mercado de capitales. Nuestra metodología es
                      rigurosa, sistemática y es validada continuamente con base
                      a nuestra experiencia histórica.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Independencia y objetividad:</b>
                      Nuestras calificaciones son independientes de presiones
                      políticas, económicas, y conflictos de interés de sus
                      propietarios, o intereses financieros de sus empleados,
                      evitando así sesgos que puedan afectar la imparcialidad y
                      equilibrio en nuestros análisis.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Transparencia y puntualidad en la calificación:</b>
                      Nuestro proceso de calificación es accesible, puntual y
                      oportuno de acuerdo a los requerimientos del emisor, de
                      tal forma que no se convierta en un obstáculo para el
                      proceso de autorización ante la Superintendencia Nacional
                      de Valores.
                    </p>
                  </li>

                  <li>
                    <p>
                      <b>Confidencialidad:</b>
                      Resguardamos la información no pública suministrada por el
                      emisor, bajo los términos de un acuerdo que la proteja. En
                      ese sentido, sólo es utilizada para el proceso de
                      calificación.
                    </p>
                  </li>
                </ul>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
