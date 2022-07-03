import App from './components/app/app';
import './global.css';
import search from './components/view/ search/search';

const app = new App();
app.start();

document.addEventListener('keyup', search);
