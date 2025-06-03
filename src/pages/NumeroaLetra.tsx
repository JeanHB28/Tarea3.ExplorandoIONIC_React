import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const NumberToWords: React.FC = () => {
  // Estados separados, pero con mejor manejo
  const [number, setNumber] = useState<number | null>(null);
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Objeto para agrupar arrays de conversión
  const numberWords = {
    units: ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'],
    teens: ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'],
    tens: ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'],
    hundreds: ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'],
  };

  // Función pura para convertir números a palabras
  const convertToWords = (num: number): string => {
    if (num === 100) return 'cien';
    if (num === 1000) return 'mil';

    let words = '';
    const centena = Math.floor(num / 100);
    const resto = num % 100;

    // Manejo de centenas
    if (centena > 0) {
      words = numberWords.hundreds[centena];
    }

    // Manejo de decenas y unidades
    if (resto > 0) {
      if (words) words += ' ';
      
      if (resto < 10) {
        words += numberWords.units[resto];
      } else if (resto < 20) {
        words += numberWords.teens[resto - 10];
      } else {
        const decena = Math.floor(resto / 10);
        const unidad = resto % 10;
        words += numberWords.tens[decena];
        if (unidad > 0) {
          words += ` y ${numberWords.units[unidad]}`;
        }
      }
    }

    return words.trim();
  };

  // Manejador del botón convertir
  const handleConvert = () => {
    if (!number || number < 1 || number > 1000 || !Number.isInteger(number)) {
      setError('Por favor, ingrese un número entero entre 1 y 1000');
      setResult('');
      return;
    }

    setError('');
    setResult(convertToWords(number));
  };

  // Manejador del input
  const handleInputChange = (value: string) => {
    const num = Number(value);
    setNumber(isNaN(num) ? null : Math.floor(num));
    setError('');
    setResult('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Conversor de Números a Letras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Convertir Número a Texto</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Número (1-1000)</IonLabel>
              <IonInput
                type="number"
                value={number?.toString() || ''}
                onIonInput={(e) => handleInputChange(e.detail.value || '')}
                min="1"
                max="1000"
                placeholder="Ingrese un número entero"
                inputmode="numeric"
                pattern="[0-9]*"
              />
            </IonItem>

            <IonButton 
              expand="block" 
              onClick={handleConvert}
              disabled={!number}
              className="ion-margin-top"
            >
              Convertir
            </IonButton>

            {error && (
              <div className="ion-text-center ion-padding">
                <p style={{ color: 'red' }}>{error}</p>
              </div>
            )}

            {result && !error && (
              <div className="ion-text-center ion-padding">
                <h2>{result}</h2>
              </div>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default NumberToWords;