import { Config } from '@stencil/core';

import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core',
  extras: {
    experimentalImportInjection: true,
  },
  outputTargets: [
    react({
      componentCorePackage: '@you/ui-kit',
      proxiesFile: '../react-library/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@you/ui-kit',
      directivesProxyFile: '../angular-library/projects/components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-library/projects/components/src/lib/stencil-generated/index.ts',
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
