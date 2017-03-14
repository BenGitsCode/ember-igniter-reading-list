import ActiveModelAdapter from 'active-model-adapter';
import ENV from '<% ember-deployment-example name %>/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,

});
