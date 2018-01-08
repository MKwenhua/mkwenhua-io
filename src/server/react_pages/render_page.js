import { renderToString } from 'react-dom/server';

const RenderPage = (content, preloadedState) => (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>MKwenhua</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap-grid.min.css">
      <link rel="stylesheet" href="/css/main.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <script src="/bundle.js" defer></script>
    </head>
    <body>
      <div id="root">${renderToString(content)}</div>
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    </body>
  </html>
`)

export default RenderPage;
