import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Informacion Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className= "ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Datos Personales</IonCardTitle>
          </IonCardHeader>
        <IonCardContent className="personal-info">
      <div className="photo-container">
          <IonImg
          src = "/Image/Jean.png"
          alt="Foto 2x2"
          className= "Profile-photo"
          />
        </div>
        <div className="info-container">
          <p><strong>Nombre: </strong> Jean Carlos Hirujo</p>
          <p><strong>Matricula: </strong> 2018-6036</p>
          <p><strong>Correo: </strong> 20186036@itla.edu.do</p>
        </div>
          </IonCardContent>
        </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default Home;
