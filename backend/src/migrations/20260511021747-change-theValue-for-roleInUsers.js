'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Temporarily change the column to a normal string so we can drop the old enum safely
    await queryInterface.changeColumn("Users", "role", { type: Sequelize.STRING });
    
    // 2. Drop the old enum if it exists
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Users_role";');
    
    // 3. Normalize any existing data to the final lowercase format
    await queryInterface.sequelize.query(`
      UPDATE "Users" SET "role" = 'user' WHERE "role" IN ('User', 'student', 'teacher');
      UPDATE "Users" SET "role" = 'admin' WHERE "role" = 'Admin';
    `);

    // 4. Create the new ENUM with only the supported values
    await queryInterface.sequelize.query(`
        CREATE TYPE "enum_Users_role" AS ENUM('admin', 'user');
        ALTER TABLE "Users" ALTER COLUMN "role" TYPE "enum_Users_role" USING "role"::"enum_Users_role";
        ALTER TABLE "Users" ALTER COLUMN "role" SET DEFAULT 'user'::"enum_Users_role";
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "role", { type: Sequelize.STRING });
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Users_role";');
    await queryInterface.changeColumn("Users", "role", {
      type: Sequelize.ENUM("admin", "user"),
      defaultValue: "user",
    });
  }
};
