import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  usage: ['usage/linter', 'usage/parser', 'usage/resolver', 'usage/philosophy'],
  contribute: [
    'contribute/intro',
    'contribute/rules',
    'contribute/parser',
    'contribute/linter',
    'contribute/resolver',
    'contribute/transformer',
    'contribute/formatter',
    'contribute/codegen',
    'contribute/minifier',
    'contribute/vscode',
    'contribute/performance',
    'contribute/showcase',
  ],
  learn: [
    'learn/ecosystem',
    'learn/partnership',
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'learn/architecture/intro',
        'learn/architecture/parser',
        'learn/architecture/linter',
        'learn/architecture/resolver',
        'learn/architecture/transformer',
        'learn/architecture/formatter',
        'learn/architecture/minifier',
      ],
    },
    {
      type: 'category',
      label: 'ECMAScript',
      items: ['learn/ecmascript/ecma_spec', 'learn/ecmascript/grammar'],
    },
    'learn/performance',
    'learn/references',
  ],
};

export default sidebars;
