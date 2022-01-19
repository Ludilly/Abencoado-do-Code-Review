import React, { useState } from 'react'
import Button from '../../components/Button';
import ListName from '../../components/ListName';
import NewName from '../../components/NewName';

const Home = ({onSubmit}) => {
  const [names, setnames] = useState([]);
  // const [sortedName, setSortedName] = useState([]);

  function addNewName(name) {
    const itensCopy = Array.from(names);
    itensCopy.push({id: names.length, value: name});
    setnames(itensCopy);
  }

  function updateName({target}, index) {
    const itensCopy = Array.from(names);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setnames(itensCopy);
  }

  function deleteName(index) {
    const itensCopy = Array.from(names);
    itensCopy.splice(index, 1);
    setnames(itensCopy);
  }

  const shuffle = () => {
    const itensCopy = Array.from(names);
    itensCopy.sort(() => Math.random() - 0.5);
    setnames(itensCopy);
  }

  return (
      <div className="App">
      <div className="App-header">
        <NewName buttonClick={addNewName} />
        {names.map(({id, value}, index) => (
          <ListName
            key={id}
            value={value}
            onChange={(event) => updateName(event, index)}
            onDelete={() => deleteName(index)}
          />
        ))}
      </div>
      <div className="Array-preview">
        <ul>
          {names.map((n) => (
            <li>{n.value}</li>
          ))}
        </ul>
      </div>
      <Button 
        type='button' 
        label='Sortear' 
        onClick={shuffle} 
      />
    </div>
  )
}

export default Home;
