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
    }
  }
}))

const ConsentBackLayer = () => {
  const classes = useStyles()
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <Box className={classes.consentContent}>
      <Typography variant="h1" className={classes.userName}>
        {user.name}
      </Typography>
      <Typography variant="h3" className={classes.userId}>
        {`Cédula: ${user.ced} | Otros…`}
      </Typography>
    </Box>
  )
}

export default ConsentBackLayer
