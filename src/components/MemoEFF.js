import { useLocation } from 'react-router-dom';

function MemoEFF() {
  const location = useLocation();
  return (
    <div>
      <p>Current URL: {location.pathname}</p>
      <p>Search Parameters: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}
export default MemoEFF; 