import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  homeContent: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    padding: theme.spacing(0, 3),
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-between',
      padding: 0
    }
  },
  btnPortal: {
    backgroundColor: '#cddc39',
    width: 153,
    height: 48,
    borderRadius: 15,
    '& .MuiButton-label': {
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: 1.25,
      fontWeight: '500'
    },
    [theme.breakpoints.up('sm')]: {
      width: 200
    }
  },
  legend: {
    display: 'none',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.6)',
    letterSpacing: 0.25,
    [theme.breakpoints.up('sm')]: {
      display: 'initial'
    }
  }
}))

const Home = ({ setOpenLoginModal }) => {
  const classes = useStyles()

  return (
    <Box className={classes.homeContent}>
      <Typography variant="h3" className={classes.legend}>
        Bienvenidos al portal, para tener acceso a sus datos proceda a ingresar
        con su firma electrónica.
      </Typography>
      <Button
        startIcon={<FingerprintIcon />}
        className={classes.btnPortal}
        onClick={() => setOpenLoginModal(true)}
      >
        Ingresar
      </Button>
    </Box>
  )
}

Home.propTypes = {
  setOpenLoginModal: PropTypes.func
}

export default Home
