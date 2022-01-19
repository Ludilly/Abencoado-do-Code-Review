import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

const NewName = ({ buttonClick }) => {

  const [name, setName] = useState('');

  function setUserName({target}) {
    setName(target.value);
  }

  function submit(e) {
    e.preventDefault();
    buttonClick(name);
  }

  return (
    <div>
      <form>
        <Input
          label="Digite um nome:"
          onChange={setUserName}
        />
        <Button onClick={submit} type="submit" label='Adicionar' />
      </form>
    </div>
  )
};

export default NewName;