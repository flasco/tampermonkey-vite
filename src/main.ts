import App from './index';
import ReactDOM from 'react-dom';
import { inject } from './utils/dom-inject';

inject(
  () => {
    const group = document.querySelector('.ant-btn-group');
    if (group == null) return null;
    const coll = group.parentElement;
    if (coll == null) return null;

    const ct = document.createElement('div');
    coll.append(ct);
    return ct;
  },
  el => {
    ReactDOM.render(React.createElement(App), el);
  }
);
