const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  return users.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Ian
 *         lastname:
 *           type: string
 *           example: Rosas
 *         email:
 *           type: string
 *           example: ian.rosas@academlo.com
 *         phone:
 *           type: string
 *           example: 9999999999
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: ian.rosas@academlo.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string,
 *           example: Ian
 *         lastname:
 *           type: string
 *           example: Rosas
 *         id:
 *           type: int
 *           example: 2
 *         email:
 *           type: string
 *           example: ian.rosas@academlo.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 */

class users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        firstname: {
          type: DataTypes.STRING(15),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: "users_email_key",
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING(15),
          allowNull: false,
          unique: "users_phone_key",
        },
        profile_image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        hooks: {
          beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 10);
            user.password = hash;
          },
        },
        sequelize,
        tableName: "users",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "users_email_key",
            unique: true,
            fields: [{ name: "email" }],
          },
          {
            name: "users_phone_key",
            unique: true,
            fields: [{ name: "phone" }],
          },
          {
            name: "users_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
