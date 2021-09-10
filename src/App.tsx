import React from 'react'
import {createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Header from './Header'
import Cat from './Cat'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
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
          <Container>
              <Box my={2}>
                  <Grid container alignItems="center" justify="center">
                      <Grid item md={4}>
                          {listItems}
                      </Grid>
                  </Grid>
              </Box>
          </Container>
        </div>
    )
}

export default App
