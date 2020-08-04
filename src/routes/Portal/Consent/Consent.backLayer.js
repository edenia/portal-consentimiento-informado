import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  consentContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(7)
  },
  userName: {
    color: '#fff',
    fontSize: 31,
    letterSpacing: 0.48,
    fontWeight: '100',
    [theme.breakpoints.up('sm')]: {
      fontSize: 76,
      letterSpacing: -1.19
    },
    [theme.breakpoints.up('lg')]: {
      // width: 298
    }
  },
  userId: {
    color: '#fff',
    fontSize: 13,
    letterSpacing: 0.16,
    fontWeight: '400',
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
      letterSpacing: 0.25
    },
    [theme.breakpoints.up('lg')]: {
      // width: 298
    }
  }
}))

const ConsentBackLayer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.consentContent}>
      <Typography variant="h1" className={classes.userName}>
        Pedro González Leiva
      </Typography>
      <Typography variant="h3" className={classes.userId}>
        Cédula: 1-2054-0549 | Otros…
      </Typography>
    </Box>
  )
}

export default ConsentBackLayer
