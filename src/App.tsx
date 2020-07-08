import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const App = () => {
  const history = useHistory();

  const onClickToPage2 = () => history.push('/page2');

  return (
    <div style={{ minHeight: '100vh', textAlign: 'center' }}>
      <h2>This is TOP</h2>
      <Link to="/page1">PAGE1</Link>
      <br />
      <br />
      <button onClick={onClickToPage2}>PAGE2</button>
    </div>
  );
};
