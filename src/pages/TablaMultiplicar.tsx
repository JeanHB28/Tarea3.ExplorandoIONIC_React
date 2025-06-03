import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonIcon, IonList } from '@ionic/react';
import './TablaMultiplicar.css'
import { useState } from 'react';

const TablaMultiplicar: React.FC = () =>{
    const [numero, setNumero] = useState<number>();
    const [tabla, setTabla] = useState<string[]>([]);

    const multiplicador = () =>{
        if(!numero){
            return;
        }
           const nuevatabla = [];
    for (let index = 1; index <= 13; index++){
        
        nuevatabla.push(`${numero} x ${index} = ${numero*index}`);
    }
    setTabla(nuevatabla);

};   

return(
<IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent fullscreen className="ion-padding">
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Generar Tabla de Multiplicar</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem>
                    <IonLabel position="stacked">Ingrese un numero</IonLabel>
                    <IonInput
                    type="number"
                    value={numero}
                    onIonInput={(e) => setNumero(Number(e.detail.value))}
                    placeholder="Ingrese un numero"/>

                </IonItem>
                <div className="table-buttons">
                    <IonButton expand="block" onClick={multiplicador}>
                    Generar Tabla
                    </IonButton>
                    
                </div>
                {tabla.length > 0 &&(
                    <IonList className="multiplicador-list">
                        {tabla.map((row,index)=>(
                            <IonItem key={index}>
                                <IonLabel>{row}</IonLabel>
                                </IonItem>
                        ))}
                        </IonList>
                )}
            </IonCardContent>
        </IonCard>

    </IonContent>
</IonPage>

);

}
 export default TablaMultiplicar;