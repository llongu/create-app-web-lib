import CommonForm from './CommonForm';
import CommonFormView from './CommonFormView';
import CommonTable from './CommonTable';
import CommonTitle from './CommonTitle';
import CommonDialog from './CommonDialog';

function plugins (Vue) {
  Vue.component('CommonForm', CommonForm);
  Vue.component('CommonFormView', CommonFormView);
  Vue.component('CommonTable', CommonTable);
  Vue.component('CommonTitle', CommonTitle);
  Vue.component('CommonDialog', CommonDialog);
}

export default plugins;
