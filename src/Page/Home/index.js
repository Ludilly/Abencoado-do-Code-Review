import React, { useState } from 'react'
import Button from '../../components/Button';
import ListName from '../../components/ListName';
import NewName from '../../components/NewName';

const Home = ({onSubmit}) => {
  const [names, setnames] = useState([]);

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

  function sortName() {
    console.log(names.shuffle())
    // names.sort()
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
          )
          )}
        </ul>
      </div>
      <p>
        E o abençoado do Cr foi
      </p>
      <Button type='button' label='Sortear' onClick={sortName} />
    </div>
  )
}

export default Home;
