import {IAppConfig} from '../app/app.model';

export const environment: IAppConfig = {
  api: {
    movie: 'http://www.omdbapi.com/?apikey=bfe207e&'
  },
  production: true
};
