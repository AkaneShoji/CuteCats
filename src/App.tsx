import React from 'react'
import Header from './Header'
import Cat from './Cat'
import Grid from '@material-ui/core/Grid'
import './App.css'

function App() {
  const numbers = Array.from(new Array(2)).map((v, i) => i)
  const listItems = numbers.map(() =>
    <Cat />
  )

  return (
    <div>
      <Header />
      <Grid container alignItems="center" justify="center">
        <Grid item md={4}>
          {listItems}
        </Grid>
      </Grid>
    </div>
  )
}

export default App
