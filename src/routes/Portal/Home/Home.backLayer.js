import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import PortalSvg from '../../../components/Icons/PortalSvg'

const useStyles = makeStyles((theme) => ({
  portalContent: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    paddingTop: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8)
    }
  },
  btnPortal: {
    backgroundColor: '#cddc39',
    width: 200,
    height: 50,
    borderRadius: 20,
    '& .MuiButton-label': {
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: 1.25,
      fontWeight: '500'
    },
    [theme.breakpoints.up('sm')]: {
      width: 238
    },
    [theme.breakpoints.up('lg')]: {
      width: 320,
      height: 40,
      marginTop: -100
    }
  },
  portalTitle: {
    fontSize: 26,
    letterSpacing: -0.41,
    color: '#fff',
    fontWeight: '100',
    [theme.breakpoints.up('sm')]: {
      fontSize: 63,
      letterSpacing: -0.98
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 76,
      letterSpacing: -1.19,
      width: 904
    }
  },
  boxSvg: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row-reverse'
    },
    [theme.breakpoints.up('lg')]: {
      '& h3': {
        marginTop: theme.spacing(10)
      }
    }
  },
  legend: {
    fontSize: 18,
    color: '#fff',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: 24,
      lineHeight: 1.45
    }
  },
  question: {
    fontSize: 26,
    color: '#fff',
    marginTop: theme.spacing(3),
    fontWeight: '400',
    letterSpacing: 1.25,
    [theme.breakpoints.up('sm')]: {
      fontSize: 45
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 50
    }
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'end',
      paddingLeft: theme.spacing(5)
    }
  },
  infoBox: {
    marginBottom: theme.spacing(2)
  },
  svgItem: {
    [theme.breakpoints.up('sm')]: {
      height: 230
    },
    [theme.breakpoints.up('lg')]: {
      height: 350
    }
  }
}))

const HomeBackLayer = ({ setOpenLoginModal }) => {
  const classes = useStyles()

  return (
    <Box className={classes.portalContent}>
      <Typography variant="h1" className={classes.portalTitle}>
        Portal Nacional de Consentimiento Informado
      </Typography>
      <Box className={classes.boxSvg}>
        <Box>
          <PortalSvg classes={classes.svgItem} />
        </Box>
        <Typography variant="h3" className={classes.legend}>
          La plataforma brinda a la ciudadanía el poder de auto-gestionar la
          privacidad de datos y el consentimiento de manera segura, en tiempo
          real y sin complicaciones.
        </Typography>
      </Box>
      <Box className={classes.btnBox}>
        <Button
          variant="contained"
          className={classes.btnPortal}
          onClick={() => setOpenLoginModal(true)}
        >
          Ingresar al Portal
        </Button>
      </Box>

      <Box className={classes.infoBox}>
        <Typography variant="h1" className={classes.question}>
          ¿Qué es consentimiento informado?
        </Typography>
        <Typography variant="h3" className={classes.legend}>
          Todo ciudadano tiene derecho a gestionar quién tiene acceso a sus
          datos oficiales, sean expedientes médicos, criminológicos u otros. El
          portal le permite otorgar accesos mediante un consentimiento informado
          y por medio de permisos basados en reglas claras y definidas. Es
          decir, sus datos podrán ser utilizados de manera estricta y por el
          tiempo que usted considere necesario.
        </Typography>
        <Typography variant="h1" className={classes.question}>
          ¿Por qué es importante?
        </Typography>
        <Typography variant="h3" className={classes.legend}>
          Todo ciudadano tiene el derecho de poder otorgar y revocar acceso a
          sus datos oficiales mediante el consentimiento informado. Esta
          capacidad le permite mantener su privacidad de una manera oportuna y
          eficiente.
        </Typography>
      </Box>
    </Box>
  )
}

HomeBackLayer.propTypes = {
  setOpenLoginModal: PropTypes.func
}

export default HomeBackLayer
