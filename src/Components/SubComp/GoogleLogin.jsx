import {Plugins} from '@capacitor/core';
import '@codetrix-studio/capacitor-google-auth';

const INITIAL_STATE = {};

const GoogleLogin = () => {
  async function signIn() {
    const result = await Plugins.GoogleAuth.signIn();
    console.info('result', result);
    alert(JSON.stringify(result));
    // if (result) {
    //   history.push({
    //     pathname: '/home',
    //     state: {
    //       name: result.name || result.displayName,
    //       image: result.imageUrl,
    //       email: result.email,
    //     },
    //   });
    // }
  }

  return <button onClick={() => signIn()}>Login with Google</button>;
};

export default GoogleLogin;
