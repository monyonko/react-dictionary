import React, {useState, useEffect} from "react"
import axios from "axios"
import './App.css';
import Phonetics from './phonetics'
import Definition from './definitions'
import Antonyms from './antonyms'
import Translation from './translations'
import Images from './images'

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [phonetic, setPhonetic] = useState("")
  const [definition, setDefinition] = useState()
  const [antonyms, setAntonyms] = useState("")
  const [word, setWord] = useState("")
  const [response, setResponse] = useState("")
  const pexelApiKey = "563492ad6f9170000100000197f67a30e1be4162ae5713e90760b06f"
  const pexelUrl =`https://api.pexels.com/v1/search?query=${searchInput}`
  const [images, setImages] = useState("")
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`
  
  
  useEffect(()=>{
    setSearchInput("Moratorium");
    searchWord()
    setSearchInput("")

  }, [])
  function searchWord(){
    axios.get(apiUrl).then(handleResponse)
    axios.get(pexelUrl, {
    headers: {
      Authorization: `Bearer ${pexelApiKey}`}
    }).then(handlePexelResponse)
  }
  function handleSubmit(event){
    event.preventDefault()
    searchWord()
    setSearchInput("")
    event.target.reset()

  }
  function handlePexelResponse(response){
    if(response){
      setImages(response)
    }
  }
  function handleResponse(response){
    console.log(response)
    setResponse(response)
    setWord(response.data[0].word)
    setPhonetic(response.data[0].phonetics)
    setDefinition(response.data[0].meanings)
    setAntonyms(response.data[0].meanings[0].antonyms)
  }
  function handleChange(event){
    setSearchInput(event.target.value)

  }
    return (
      <div className="App" >
        <header className="App-header">
          <p className="headerTitle">Dictionary</p>
          <p className="dictionaryLink">definitions from <a href="https://dictionaryapi.dev/">Free Dictionary</a></p>
        </header>
        <hr/>
        <main>
          <form className="searchSection" onSubmit={handleSubmit}>
            <input type="search" className="input-search" placeholder="Get word definition" onChange={handleChange}/>
            <input type="submit" className="input-submit" placeholder="Search"/>
          </form>
          <p className="mainWord"><strong>{word}</strong></p>
          <Phonetics className="phonetics" data= {phonetic}/>
          <Definition data={definition}/>
          <Antonyms data={antonyms} />
          <Images data={images} />
          
        </main>
        <footer>
        <p>Coded by <a href="https://github.com/monyonko">Kemuma</a>, open-sourced at <a href="https://github.com/monyonko/react-dictionary">Github</a> and hosted on <a href="https://react-dictionary-sable.vercel.app/">Vercel</a>.</p>
        </footer>
      </div>
    );

 

  
}

export default App;
