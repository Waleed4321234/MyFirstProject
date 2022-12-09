import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Amplify } from 'aws-amplify';
const awsConfig=require('./aws-exports')

Amplify.configure(awsConfig) 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
