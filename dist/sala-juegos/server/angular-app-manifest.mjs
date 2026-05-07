
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/quien-soy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 435, hash: '1a55b728a2f1ef8bd586e4b952b819cda04af87a67a52cab52b5d6ba6df5065a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: '1314879c9893f0daefb2091ab0051adf98cd5c2d2da5ad6ffe085f3304429513', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 1633, hash: '6f8f6e858ad68c2075d627f05d30e5c918f0bb3f6e3e01d79e20861856f1764f', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 1618, hash: '01385a26d2cdac1b2de963e2988015206b8509e3a155546a8285fd324f7e8a78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 1624, hash: '85679406e7a5062cc1786b6ffe971a0b47a11e2e0b571cfb521a1b92e3eab1f9', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'quien-soy/index.html': {size: 3763, hash: 'b9db5015759602c66fb8482621dd28783a37309235feb968a800df6adaad321c', text: () => import('./assets-chunks/quien-soy_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
