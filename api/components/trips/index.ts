import * as store from '../../../store/mongo';
const controller = require('./controller');

module.exports = controller(store);
