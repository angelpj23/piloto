'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('app', [{
      Chasis_Vehículo: Sequelize(result[0].value),
      Peso_neto : Sequelize(result[1].value),
      Peso_carga : Sequelize(result[2].value),
      Peso_Total : Sequelize(result[3].value),
      Velocidad_alcance: Sequelize(result[4].value),
      Aceleración_máxima:Sequelize(result[5].value),
      Fuerza_atracción: Sequelize(result[6].value),
      Fuerza_Neta: Sequelize(result[7].value),
      Fuerza_impulso: Sequelize(result[8].value),
      Revoluciones: Sequelize(result[9].value),
      Potencia : Sequelize(result[10].value),
      Combustible : Sequelize(result[11].value),
     }]
     );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
