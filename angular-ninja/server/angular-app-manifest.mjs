
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://lapllia228.github.io/Image-to-text-uploader/angular-ninja/src/index.html',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Image-to-text-uploader/angular-ninja/src/index.html"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 575, hash: '5a6a75a3fa8d6a6afd12df58a1269e85e14f1b8b430ae7e97302fe385b70bec5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1088, hash: 'c9d260727ce0accf4e56f529e3cba4eb0db0ca7d39f250e25e52a0721bfe57b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
