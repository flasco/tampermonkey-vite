const clipboardy = require('clipboardy');
const usPrefixGenerate = require('./prefix-mix');

const generateDevScript = () => {
  const str = `
(() => {
    unsafeWindow.React = React;
    unsafeWindow.ReactDOM = ReactDOM;
    const injectScript = (url) => {
      var xxx = document.createElement('script');
      xxx.type = 'module';
      xxx.src = url;
      document.body.append(xxx);
    }
    injectScript('http://localhost:3000/src/main.ts');
    injectScript('http://localhost:3000/@vite/client');
})()`;

  const prefix = usPrefixGenerate();
  const s = prefix + str;
  clipboardy.writeSync(s);
  console.log();
  console.log(
    'generate dev script success!, auto copied to clipboard, now you can go to tampermonkey to paste it'
  );
};

generateDevScript();
