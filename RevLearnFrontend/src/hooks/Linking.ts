/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-empty-function */
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import invariant from 'fbjs/lib/invariant';

const initialURL = canUseDOM ? window.location.href : '';

const open = (url: string | undefined, target: string | undefined) => {
  if(canUseDOM) {
    window.open(
      url,
      target, // <- This is what makes it open in a new window.
    );
  }
};

const CustomLinking = {
  addEventListener() {},
  removeEventListener() {},
  canOpenURL(): Promise<boolean> {
    return Promise.resolve(true);
  },
  getInitialURL(): Promise<string> {
    return Promise.resolve(initialURL);
  },
  openURL(url: string, target = '_self'): Promise<Object | void> {
    try {
      open(url, target);
      return Promise.resolve();
    } catch(e) {
      return Promise.reject(e);
    }
  },
  _validateURL(url: string) {
    invariant(typeof url === 'string', `Invalid URL: should be a string. Was: ${url}`);
    invariant(url, 'Invalid URL: cannot be empty');
  },
};

export default CustomLinking;
