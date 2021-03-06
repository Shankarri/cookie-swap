module.exports = function(sequelize, DataTypes) {
    var SUM = sequelize.define("SUM", {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        }
      });
    
      SUM.associate = function(models) {
        // Associating SUM with TCMs
        // When an SUM is deleted, also delete any associated TCM
        SUM.hasMany(models.TCM, {
        });
      };

      SUM.prototype.validPassword = function(password) {
        return (this.password === password)
      }

      return SUM;
    };