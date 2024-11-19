import classes from './Item.module.css';

const formatValue = (key, value) => {
  if (key == 'intensity') {
    const customIntensityLabel = {
      BARELY_NOTICEABLE: "Quase imperceptível",
      MILD_DISCOMFORT: "Leve desconforto",
      MODERATE_INTENSITY: "Intensidade moderada",
      SEVERE_PAIN: "Dor severa",
      UNBEARABLE: "Insuportável"
    }
    if (customIntensityLabel[value]) return customIntensityLabel[value];
  }
  if (key == 'frequencyUnit') {
    const customFrequencyLabel = {
      MINUTES: "Minutos",
      HOURS: "Horas",
      DAYS: "Dias",
      WEEKS: "Semanas",
      MONTHS: "Mêses",
      SPORADICALLY: "Esporádico",
    }
    if (customFrequencyLabel[value]) return customFrequencyLabel[value];
  }
  if (key == 'registerDate' || key == 'endDate' || key == 'startDate' || key == 'checkTime' || key == 'date') {
    const date = new Date(value);

    const formatter = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "medium", // Medium format for the date
      timeStyle: "short", // Short format for the time
    });
    return formatter.format(date);
  }
  if (key == 'applicationDate') {
    const date = new Date(value);

    const formatter = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "medium", // Medium format for the date
    });
    return formatter.format(date);
  }
  if (key == 'heartRate') {
    return value + " BPM"
  }
  return value;

};

const customLabels = {
  name: "Nome",
  intensity: "Intensidade",
  registerDate: "Data",
  description: "Descrição",
  frequencyValue: "Frequência",
  frequencyUnit: "Intervalo",
  endDate: "Data de fim",
  startDate: "Data de início",
  doseValue: "Dosagem",
  doseUnit: "Unidade",
  applicationDate: "Data de aplicação",
  checkTime: "Medição",
  date: "Data",
  checkDate: "Data",
  address: "Endereço",
  doctorsName: "Especialista",
  systolicPressure: "Pressão Sistólica",
  diastolicPressure: "Pressão Diastólica",
  heartRate: "Batimentos",
  weight: "Peso"
};

const formatKey = (key) => {
  if (customLabels[key]) return customLabels[key];
};

const Item = ({ item, type }) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemHeader}>
        <h2 className={classes.itemTitle}>{item.name || type}</h2>
        <span className={classes.itemDate}></span>
      </div>
      <div className={classes.itemContent}>
        <ul className={classes.itemDetails}>
          {Object.entries(item).map(([key, value]) => (
            key !== 'id' && key !== 'title' && value != "" && ( // Exclude certain keys if needed
              <li key={key}>
                <strong>{formatKey(key)}:</strong> {formatValue(key, value)}
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Item;