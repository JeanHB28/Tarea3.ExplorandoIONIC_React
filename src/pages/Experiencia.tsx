import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/react';
import './Experiencia.css'

const Experiencia: React.FC = () =>{

    const videoId = 'hlN_Mnbue7U';

return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Mi Experiencia</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Mi Experiencia con la Tarea</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                <div className="video-container">
                    <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title=""
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    >
                    </iframe>
                </div>
                <div className="experience-description">
                    <p>
                       En este video comparto mi experiencia desarrollando esta tarea,
                        los retos encontrados y las soluciones implementadas. 
                    </p>

                </div>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
);
};


export default Experiencia;