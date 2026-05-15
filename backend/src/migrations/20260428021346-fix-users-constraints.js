'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'userName', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })

    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })

    await queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.ENUM('user', 'admin'),
      allowNull: false,
      defaultValue: 'user'
    })

    await queryInterface.addColumn('Users', 'language_pref', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'km'
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'userName', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.ENUM('user', 'admin'),
      allowNull: true,
      defaultValue: 'user'
    })

    await queryInterface.removeColumn('Users', 'language_pref')
  }
}
