
import angular from 'angular';
import { ComponentsModule } from './components/components.module';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
  }
};

export const RootModule = angular
  .module('app', [ComponentsModule])
  .directive('app', app).name;
