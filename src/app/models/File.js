import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`; // to work in a page or app needs the ip instead of 'localhost'
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
