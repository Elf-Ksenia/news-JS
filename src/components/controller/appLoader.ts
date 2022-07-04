import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'e419d1ff1ce44083bfd955856da5afb6',
    });
  }
}

export default AppLoader;
