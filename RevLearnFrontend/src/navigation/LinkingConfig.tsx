import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const config: LinkingOptions = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          LandingPage: {
            screens: {
              HomeScreen: 'home',
            },
          },
          LoginPage: {
            screens: {
              LoginPage: 'login',
            },
          },
        },
      },
      /* ItemView: {
        screens: {
          ItemView: 'item',
        },
      },
      NotFound: '*', */
    },
  },
}

export default config;
