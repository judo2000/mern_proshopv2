import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      annimation="border"
      role="status"
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
      }}
    />
  );
};

export default Loader;
