import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function RouterHelper({ Component }) {
  const navigate = useNavigate();
  const id = useParams();
  return <Component navigate={navigate} User={id}/>;
}

export default RouterHelper;
