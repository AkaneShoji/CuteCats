import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

import Typography from '@material-ui/core/Typography'
import { blue } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import './App.css'

type Props = {
    //text?: string,
    //fontSize?: string,
    //color?: string,
    //uniqueNum: number
}

function Cat(props: Props) {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
          root: {

            maxWidth: 600,
          },
          media: {
            height: 0,
            paddingTop: '100%',
          },
          avatar: {
            backgroundColor: blue[500],
          },
        }),
    )

  const classes = useStyles()

    //onst text = props.text === undefined ? `%20` : props.text
    //const fontSize = props.fontSize === undefined ? '50' : props.fontSize
    //const color = props.color === undefined ? 'white' : props.color

  const imageNumber = (Math.floor(Math.random() * 9))  
  const url = `${process.env.PUBLIC_URL}/image/cat01${imageNumber}.jpg`

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Cute Cat"
        subheader="September 2, 2021"
      />
      
      <CardMedia
        className={classes.media}
        image={url}
        title="cute cats"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            めちゃくちゃかわいいねこ
        </Typography>
      </CardContent>
        
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      </Card>
    </div>
  )
}

export default Cat
