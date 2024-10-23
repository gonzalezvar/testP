import './App.css'
import Card from './components/Card'
import { characters } from './utils/rawData'
import { useState } from 'react'
import InputSearch from './components/InputSearch'


function App() {

  const [listCharacters, setListCharacters] = useState(characters)

  const [isLoading, setIsloading] = useState(false)

  const filterCharacters = (id) => {
    const newListCharacters = listCharacters.filter(character => character.id !== id)
    setListCharacters(newListCharacters)
  }


  const findCharacters = (name) => {
    if (!name) {
      setListCharacters(characters)
      return
    }

    const resultCharacter = characters.filter(character => character.name.includes(name));
    if (resultCharacter.length === 0) {
      alert('No se encontraron resultados')
      return
    }
    setListCharacters(resultCharacter)
    setIsloading(true)
  }

  if (isLoading) {
    setTimeout(() => {
      setIsloading(false)
    }, 1000);

    return (
      <div className="loader"></div>
    )
  }


  return (
    <>
    
      <InputSearch
        findCharacters={findCharacters}

      />

      <div className='container d-flex flex-wrap gap-2'>
        {

          listCharacters.length > 0 ?
            listCharacters.map(character => (
              <Card
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                deleteCharacter={filterCharacters}
              />
            ))
            : <p>No hay resultados en tu busqueda</p>

        }
      </div>
    </>
  )
}

export default App

