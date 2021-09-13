import React from 'react'
import {createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Header from './Header'
import Cat from './Cat'
import Grid from '@material-ui/core/Grid'
import './App.css'



function App() {
  const numbers = Array.from(new Array(3)).map((v, i) => i)
  const listItems = numbers.map(() =>
    <Cat />
  )

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
        }),
    )

  const classes = useStyles()

  return (     
      <div className={classes.root}>
          <Header />
              <Grid container alignItems="center" justify="center">
                  <Grid item md={6}>
                      {listItems}
                  </Grid>
              </Grid>

        </div>
    )
}

export default App
