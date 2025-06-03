import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, setupIonicReact, IonLabel, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import{ calculator, grid, personCircle, text, videocam } from 'ionicons/icons'

import Home from './pages/Home';
import Calculador from './pages/Calculador';
import Experiencia from './pages/Experiencia';
import TablaMultiplicar from './pages/TablaMultiplicar';
import NumberToWords from './pages/NumeroaLetra';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
          
        </Route>
        <Route exact path="/calculador">
          <Calculador />
        </Route>

        <Route exact path="/experiencia">
          <Experiencia/>
        </Route>

        <Route exact path="/tablaMultiplicar">
          <TablaMultiplicar/>
        </Route>

        <Route exact path="/numeroaLetra">
          <NumberToWords/>
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
        <IonIcon icon={personCircle}/>
        <IonLabel>Perfil</IonLabel>
        </IonTabButton>

        <IonTabButton tab="calculator" href="/calculador">
        <IonIcon icon={calculator}/>
        <IonLabel>Sumadora</IonLabel>
        </IonTabButton>

        <IonTabButton tab="experiencia" href="/experiencia">
        <IonIcon icon={videocam}/>
        <IonLabel>Experiencia</IonLabel>
        </IonTabButton>

         <IonTabButton tab="TablaMultiplicar" href="/TablaMultiplicar">
        <IonIcon icon={grid}/>
        <IonLabel>Tabla</IonLabel>
        </IonTabButton>

        <IonTabButton tab="NumeroaLetra" href="/NumeroaLetra">
        <IonIcon icon={text}/>
        <IonLabel>Numeros</IonLabel>
        </IonTabButton>

        </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;


