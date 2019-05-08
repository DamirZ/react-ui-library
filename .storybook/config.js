import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

require(`../src/damir-ui.scss`);

storybook.setAddon(infoAddon);

setOptions({
  name: 'Damir - React UI Storybook',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

const req = require.context('../src/components/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

// module hot reloading
if (module.hot) {
  module.hot.accept();
}

storybook.configure(loadStories, module);