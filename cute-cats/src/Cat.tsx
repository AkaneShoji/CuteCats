import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './App.css'

type Props = {
    text?: string,
    fontSize?: string,
    color?: string,
    uniqueNum: number
}

function Cat(props: Props) {
    const text = props.text === undefined ? `%20` : props.text
    const fontSize = props.fontSize === undefined ? '50' : props.fontSize
    const color = props.color === undefined ? 'white' : props.color

    
  const url = `https://cataas.com/cat/says/${text}?s=${fontSize}&c=${color}&uniqueNum=${props.uniqueNum}`

  return (
    <div className="App-body">
        <LazyLoadImage src={url}/>
    </div>
  )
}

export default Cat
