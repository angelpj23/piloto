const { throws } = require("assert");
const { error } = require("console");
const express = require('express');
const fs = require("fs");
const filepath = fs.readFileSync("./input.json");
const fileget = JSON.parse(filepath);

let position = [];

for (fg in fileget) {
const value = fileget[fg]; //navegue hasta el valor del objeto
position.push(value);
}

const NumerodeChasis = position[0]; 
const nc= position[1];
const mv= position[2];
const mc= position[3];
const an= position[4];
const d=position[5];
const t= position[6];
const rm=position[7];
const pm= position[8];
const ccr= position[9];

try {

  if (nc > 1500) {
    throw new Error("Exceso de combustible (limite 1500)");
  
  }
  
  else if (pm > 150) {
    throw new Error("Exceso de potencia en el motor (limite 150)");
  }

//--------------------- output
const g = 5;
// NumerodeChasis
const pnv = mv * g;
const pc= mc * g;
const ptv= pnv + pc;
const v=d/t;
const a=v/t;
const fa=ptv * Math.sin(an);
const fn=a * Math.sin(an) * (mv + mc);
const fri=fa + fn;
const rr=0;
const pr=0;
const cr= ccr/rm;

let result = [];

result.push({
"Numero de Chasis del Vehículo": NumerodeChasis,
"Peso neto del vehículo" : pnv,
"Peso de la carga" : pc,
"Peso Total del vehículo" : ptv,
"Velocidad máxima de alcance": v,
"Aceleración máxima de alcance": a,
"Fuerza de atracción": fa,
"Fuerza Neta": fn,
"Fuerza requerida de impulso": fri,
"Revoluciones requeridas": rr,
"Potencia requerida" : pr,
"Combustible requerido" : cr + " litros"
});


fs.writeFileSync("resultados.json", JSON.stringify(result));

} 
catch (error) {
    console.log('Error al ejecutar:'+ " " +(error.message));
  }

  //DataBase Model
  module.exports = (sequelize, type) => {
    return sequelize.define('app', {
      Chasis_Vehículo: type.INTEGER,
      Peso_neto : type.INTEGER,
      Peso_carga : type.INTEGER,
      Peso_Total : type.INTEGER,
      Velocidad_alcance: type.INTEGER,
      Aceleración_máxima: type.INTEGER,
      Fuerza_atracción: type.INTEGER,
      Fuerza_Neta: type.INTEGER,
      Fuerza_impulso: type.INTEGER,
      Revoluciones: type.INTEGER,
      Potencia : type.INTEGER,
      Combustible : type.STRING  
    })
  }

 
