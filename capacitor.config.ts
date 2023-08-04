import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.theblackwolf88.shopping_list',
  appName: 'Shopping List',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
