import classes from './Item.module.css';

const formatValue = (key, value) => {
  if (Array.isArray(value)) return value.join(', '); // Join arrays
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'; // Convert booleans to Yes/No

  return value;

};

const Item = ({ item }) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemHeader}>
        <h2 className={classes.itemTitle}>{item.name || 'Untitled Item'}</h2>
        <span className={classes.itemDate}>November 18, 2024</span>
      </div>
      <div className={classes.itemContent}>
        <p></p>
        <ul className={classes.itemDetails}>
          {Object.entries(item).map(([key, value]) => (
            key !== 'id' && key !== 'title' && ( // Exclude certain keys if needed
              <li key={key}>
                <strong>{key}:</strong> {formatValue(key, value)}
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Item;