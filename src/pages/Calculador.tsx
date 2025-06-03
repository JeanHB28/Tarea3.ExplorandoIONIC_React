import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { useState } from 'react';
import './Calculador.css'

const Calculador: React.FC = () =>{
const [numero1, setNumero1] = useState<number>();
const [numero2, setNumero2] = useState<number>();
const [resultado, setResultado] = useState<number | null>(null);

const cacularSuma = () => {
  if (numero1 !== undefined && numero2 !== undefined && !isNaN(numero1) && !isNaN(numero2)) {
    setResultado(numero1 + numero2);
  } else {
    setResultado(null);
  }
};
return(
<IonPage>   
    <IonHeader>
        <IonToolbar>
            <IonTitle>Sumadora</IonTitle>
            </IonToolbar>        
    </IonHeader>
    <IonContent fullscreen className='ion-padding'>
    <IonCard>
        <IonCardHeader>
            <IonCardTitle>Suma de dos numeros</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <IonItem>
                <IonLabel position="stacked">Primer numero</IonLabel>
                <IonInput
                type="number"
                value={numero1}
                onIonInput={(e) => setNumero1(Number(e.detail.value))}
                placeholder="Ingrese el primer numero"/>
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Segundo numero</IonLabel>
                <IonInput
                type="number"
                value={numero2}
                onIonInput={(e) => setNumero2(Number(e.detail.value))}
                placeholder="Ingrese el segundo numero"/>
            </IonItem>
            <div className="calculator-buttons">
                <IonButton expand="block" onClick={cacularSuma}>
                    Calcular Suma
                </IonButton>
            </div>
            {resultado !== null &&(
                <div className="result">
                    <h2>Resultado: {resultado}</h2>
                </div>
            )}
        </IonCardContent>
    </IonCard>
    </IonContent>
</IonPage>    
);
};

export default Calculador;
