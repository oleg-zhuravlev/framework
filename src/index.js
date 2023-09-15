import { App } from './core';
import { HeaderComponent, MainComponent, FooterComponent } from './components';
import './index.css';

const app = new App({
  selector: '#app',
  components: [HeaderComponent, MainComponent, FooterComponent],
});

app.render();
