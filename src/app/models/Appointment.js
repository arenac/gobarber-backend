import Sequelize, { Model } from 'sequelize';
import { isBefore, isAfter, addHours } from 'date-fns';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, ['date']),
          get() {
            return isBefore(this.get('date'), new Date());
          },
        },
        cancelable: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, ['date']),
          get() {
            return isAfter(addHours(this.get('date'), 2), new Date());
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
