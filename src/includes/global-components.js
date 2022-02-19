import { BaseDivider, BaseDividerAlt, BaseFrame } from '@/components/base';

export default {
  install(app) {
    app.component('BaseDivider', BaseDivider);
    app.component('BaseDividerAlt', BaseDividerAlt);
    app.component('BaseFrame', BaseFrame);
  }
};
