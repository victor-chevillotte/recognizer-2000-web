import React, { useState } from 'react'
import axios from 'axios'

const AddVideo = (props) => {

  const [formData, updateFormData] = useState({
    title: '',
    description: '',
    vid_url: '',
    genres: []
  })
  const inputFields = ['title', 'description', 'vid_url']

  function handleChange(event) {
    const data = {
      ...formData,
      [event.target.name]: event.target.value
    }
    console.log(data)
    updateFormData(data)
  }
  function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')
    axios.post('/backend/videos', formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        props.history.push('/')
      })
  }

  const genres = [[1, 'Animation'],
  [2, 'Writing'],
  [3, 'Film & Video'],
  [4, 'Productivity'],
  [5, 'Graphic Design'],
  [6, 'Art & Illustration'],
  [7, 'Music'],
  [8, 'Photography'],
  [9, 'UI/UX Design'],
  [10, 'Web Development'],
  [11, 'Cooking'],
  [12, 'Lifestyle']]

  const [animationClass, animationUpdate] = useState('')
  const [writingClass, writingUpdate] = useState('')
  const [filmClass, filmUpdate] = useState('')
  const [prodClass, prodUpdate] = useState('')
  const [graphicClass, graphicUpdate] = useState('')
  const [artClass, artUpdate] = useState('')
  const [musicClass, musicUpdate] = useState('')
  const [photographyClass, photographyUpdate] = useState('')
  const [designClass, designUpdate] = useState('')
  const [webClass, webUpdate] = useState('')
  const [cookingClass, cookingUpdate] = useState('')
  const [lifeClass, lifeUpdate] = useState('')

  function handleSelected(e) {
    e.preventDefault()
    let id = null
    const array = formData.genres
    if (e.target.value === 'Animation') {
      id = 1
      if (animationClass === '') {
        animationUpdate('genre-button-active')
      } else {
        animationUpdate('')
      }
    }
    if (e.target.value === 'Writing') {
      id = 2
      if (writingClass === '') {
        writingUpdate('genre-button-active')
      } else {
        writingUpdate('')
      }
    }
    if (e.target.value === 'Film & Video') {
      id = 3
      if (filmClass === '') {
        filmUpdate('genre-button-active')
      } else {
        filmUpdate('')
      }
    }
    if (e.target.value === 'Productivity') {
      id = 4
      if (prodClass === '') {
        prodUpdate('genre-button-active')
      } else {
        prodUpdate('')
      }
    }
    if (e.target.value === 'Graphic Design') {
      id = 5
      if (graphicClass === '') {
        graphicUpdate('genre-button-active')
      } else {
        graphicUpdate('')
      }
    }
    if (e.target.value === 'Art & Illustration') {
      id = 6
      if (artClass === '') {
        artUpdate('genre-button-active')
      } else {
        artUpdate('')
      }
    }
    if (e.target.value === 'Music') {
      id = 7
      if (musicClass === '') {
        musicUpdate('genre-button-active')
      } else {
        musicUpdate('')
      }
    }
    if (e.target.value === 'Photography') {
      id = 8
      if (photographyClass === '') {
        photographyUpdate('genre-button-active')
      } else {
        photographyUpdate('')
      }
    }
    if (e.target.value === 'UI/UX Design') {
      id = 9
      if (designClass === '') {
        designUpdate('genre-button-active')
      } else {
        designUpdate('')
      }
    }
    if (e.target.value === 'Web Development') {
      id = 10
      if (webClass === '') {
        webUpdate('genre-button-active')
      } else {
        webUpdate('')
      }
    }
    if (e.target.value === 'Cooking') {
      id = 11
      if (cookingClass === '') {
        cookingUpdate('genre-button-active')
      } else {
        cookingUpdate('')
      }
    }
    if (e.target.value === 'Lifestyle') {
      id = 12
      if (lifeClass === '') {
        lifeUpdate('genre-button-active')
      } else {
        lifeUpdate('')
      }
    }

    addOrRemove(array, id)

    function addOrRemove(array, id) {
      const obj = { id: id }
      var index = array.findIndex(x => x.id === id)
      if (index === -1) {
        array.push( obj )
      } else {
        array.splice(index, 1)
      }
      
      const data = {
        ...formData,
        genres: array
      }

      updateFormData(data)

    }

  }
  console.log(formData)
  return <main className="mainEditVideo">
    <form onSubmit={handleSubmit}>
      {inputFields.map(field => {
        return <div key={field}>
          <label>{field}</label>
          <input
            type={field}
            onChange={handleChange}
            value={formData.field}
            name={field}
          />
        </div>
      })}
      <label>genre</label>
      <div className="button-container">
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${animationClass}`}
          value={genres[0][1]}>
          {genres[0][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${writingClass}`}
          value={genres[1][1]}>
          {genres[1][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${filmClass}`}
          value={genres[2][1]}>
          {genres[2][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${prodClass}`}
          value={genres[3][1]} >
          {genres[3][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${graphicClass}`}
          value={genres[4][1]} >
          {genres[4][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${artClass}`}
          value={genres[5][1]} >
          {genres[5][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${musicClass}`}
          value={genres[6][1]} >
          {genres[6][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${photographyClass}`}
          value={genres[7][1]} >
          {genres[7][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${designClass}`}
          value={genres[8][1]} >
          {genres[8][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${webClass}`}
          value={genres[9][1]} >
          {genres[9][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${cookingClass}`}
          value={genres[10][1]} >
          {genres[10][1]}
        </button>
        <button
          onClick={handleSelected}
          className={`genres-button genre-option ${lifeClass}`}
          value={genres[11][1]} >
          {genres[11][1]}
        </button>
      </div>



      <button>Save</button>
    </form>
  </main>
}

export default AddVideo