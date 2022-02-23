import {
  BaseButton,
  BaseDivider,
  BaseDividerAlt,
  BaseFrame,
  BaseIcon,
  BaseInput,
  BaseSurface
} from '@/components/base';

export default {
  install(app) {
    app.component('BaseButton', BaseButton);
    app.component('BaseDivider', BaseDivider);
    app.component('BaseDividerAlt', BaseDividerAlt);
    app.component('BaseFrame', BaseFrame);
    app.component('BaseIcon', BaseIcon);
    app.component('BaseInput', BaseInput);
    app.component('BaseSurface', BaseSurface);
  }
};
