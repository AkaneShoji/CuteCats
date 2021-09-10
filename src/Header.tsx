import React from 'react'
import { alpha, createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import './App.css'



function Header() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            search: {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha(theme.palette.common.black, 0.05),
                '&:hover': {
                    backgroundColor: alpha(theme.palette.common.black, 0.00),
                },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(3),
                    width: 'auto',
                },
            },
            searchIcon: {
                padding: theme.spacing(0, 2),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            inputRoot: {
                color: 'inherit',
            },
            inputInput: {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('md')]: {
                    width: '20ch',
                },
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
        }),
    )

  const classes = useStyles()


  return (     
      <>
          <AppBar color="default">
              <Toolbar >
                  <Typography variant="h6" color="inherit">
                      Catstagram
                  </Typography>  
                  <div className={classes.search}>
                      <div className={classes.searchIcon}>
                          <SearchIcon />
                      </div>
                      <InputBase
                          placeholder="検索"
                          classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                      />
                  </div>
              </Toolbar>
          </AppBar>
          <Toolbar />
        </>
    )
}

export default Header
