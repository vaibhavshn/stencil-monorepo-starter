import { Config } from '@stencil/core';

import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    react({
      componentCorePackage: '@you/ui-kit',
      proxiesFile: '../react-library/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
