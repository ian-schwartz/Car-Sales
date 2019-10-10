import React from 'react';
import { removeItem } from './actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeItem(props.item)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
