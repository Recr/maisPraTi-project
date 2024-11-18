// Utility function to format attribute values
const formatValue = (key, value) => {
  if (Array.isArray(value)) return value.join(', '); // Join arrays
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'; // Convert booleans to Yes/No

  return value;

};

const Item = ({ item }) => {
  
  return (
    <div style={{ border: '1px solid #f8a64f', padding: '10px', margin: '10px 0' }}>
      <h2>{item.name || 'Untitled Item'}</h2>
      <ul>
        {Object.entries(item).map(([key, value]) => (
          key !== 'id' && key !== 'title' && ( // Exclude certain keys if needed
            <li key={key}>
              <strong>{key}:</strong> {formatValue(key, value)}
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Item;