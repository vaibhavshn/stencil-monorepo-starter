import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@you/ui-kit/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
