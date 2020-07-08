import React from 'react';
import { useHistory } from 'react-router-dom';

export const Page1 = () => {
  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div style={{ minHeight: '100vh', textAlign: 'center' }}>
      <h2>This is PAGE1</h2>
      <button onClick={onClickBack}>back</button>
    </div>
  );
};
