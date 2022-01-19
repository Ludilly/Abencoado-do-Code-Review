
import React from 'react';
import Button from '../Button';
import Input from '../Input';

const ListItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="Item-container">
      <Input
        value={value}
        onChange={onChange}
      />
      <Button onClick={onDelete} label='Deletar'/>
    </div>
  );
};

export default ListItem;