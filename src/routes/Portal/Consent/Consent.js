import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  consent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(1)
  },
  btnConsent: {
    border: '2px solid rgba(0, 0, 0, 0.12)',
    width: 118,
    height: 36,
    borderRadius: 20,
    '& .MuiButton-label': {
      color: '#0071b3',
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: 1.25,
      fontWeight: '500'
    }
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end'
    }
  },
  titleBox: {
    margin: theme.spacing(3, 0, 2, 0)
  },
  title: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 25,
    letterSpacing: 0.18,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: 34,
      letterSpacing: 0.25
    }
  },
  info: {
    fontSize: 16,
    lineHeight: '28px',
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  accordion: {
    width: '100%',
    '& .MuiPaper-elevation1': {
      boxShadow: 'none'
    },
    '& .MuiIconButton-root': {
      padding: 2
    }
  },
  heading: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: '28px',
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  accordionOption: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  successPermission: {
    color: '#cddc39',
    marginRight: 8
  },
  deniedPermission: {
    color: '#b00020',
    marginRight: 8
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& p': {
      fontSize: 16,
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: '28px',
      letterSpacing: 0.5,
      color: 'rgba(0, 0, 0, 0.6)'
    }
  }
}))

const ConsentPage = ({ setOpenConsentModal }) => {
  const classes = useStyles()
  const data = localStorage.getItem('data')

  return (
    <Box className={classes.consent}>
      <Box className={classes.titleBox}>
        <Typography variant="h1" className={classes.title}>
          Tabla de Consentimiento
        </Typography>
        <Typography variant="h3" className={classes.info}>
          Aquí podrá consultar, crear o modificar entradas de consentimiento
          informado.
        </Typography>
      </Box>
      <Box className={classes.accordion}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box className={classes.accordionOption}>
              {data === 'denied' ? (
                <HighlightOffIcon className={classes.deniedPermission} />
              ) : (
                <CheckCircleIcon className={classes.successPermission} />
              )}
              <Typography className={classes.heading}>
                Acceso a datos médicos en caso de emergencia
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.details}>
              <Typography>
                <strong>Estatus:</strong>
                {data === 'denied' ? ' Denegado' : ' Aprobado'}
              </Typography>
              <Typography>
                <strong>Última actualización:</strong> 08:12:07am, lunes 4 de
                agosto, 2020
              </Typography>
              <Typography>
                <strong>Descripción:</strong> Acceso a datos médicos
                provenientes de mi expediente médico del EDUS. Estos datos
                incluyen especificamente entradas sobre género, alérgenos,
                patologías crónicas y virulencia.
              </Typography>
              <Box className={classes.btnBox}>
                <Button
                  className={classes.btnConsent}
                  onClick={() => setOpenConsentModal(true)}
                >
                  modificar
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box className={classes.accordionOption}>
              <CheckCircleIcon className={classes.successPermission} />
              <Typography className={classes.heading}>
                Acceso a datos médicos para terceros
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.details}>
              <Typography>
                <strong>Estatus:</strong> Denegado
              </Typography>
              <Typography>
                <strong>Última actualización:</strong> 08:12:07am, lunes 6 de
                julio, 2020
              </Typography>
              <Typography>
                <strong>Descripción:</strong> Acceso a datos médicos
                provenientes de mi expediente médico del EDUS. Estos datos
                incluyen especificamente entradas sobre género, alérgenos,
                patologías crónicas y virulencia.
              </Typography>
              <Box className={classes.btnBox}>
                <Button
                  className={classes.btnConsent}
                  onClick={() => setOpenConsentModal(true)}
                >
                  modificar
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box className={classes.accordionOption}>
              <HighlightOffIcon className={classes.deniedPermission} />
              <Typography className={classes.heading}>
                Acceso a expediente en caso de emergencia
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.details}>
              <Typography>
                <strong>Estatus:</strong> Denegado
              </Typography>
              <Typography>
                <strong>Última actualización:</strong> 08:12:07am, lunes 6 de
                julio, 2020
              </Typography>
              <Typography>
                <strong>Descripción:</strong> Acceso a datos médicos
                provenientes de mi expediente médico del EDUS. Estos datos
                incluyen especificamente entradas sobre género, alérgenos,
                patologías crónicas y virulencia.
              </Typography>
              <Box className={classes.btnBox}>
                <Button
                  className={classes.btnConsent}
                  onClick={() => setOpenConsentModal(true)}
                >
                  modificar
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box className={classes.accordionOption}>
              <HighlightOffIcon className={classes.deniedPermission} />
              <Typography className={classes.heading}>
                Acceso a expediente para terceros
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.details}>
              <Typography>
                <strong>Estatus:</strong> Denegado
              </Typography>
              <Typography>
                <strong>Última actualización:</strong> 08:12:07am, lunes 6 de
                julio, 2020
              </Typography>
              <Typography>
                <strong>Descripción:</strong> Acceso a datos médicos
                provenientes de mi expediente médico del EDUS. Estos datos
                incluyen especificamente entradas sobre género, alérgenos,
                patologías crónicas y virulencia.
              </Typography>
              <Box className={classes.btnBox}>
                <Button
                  className={classes.btnConsent}
                  onClick={() => setOpenConsentModal(true)}
                >
                  modificar
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

ConsentPage.propTypes = {
  setOpenConsentModal: PropTypes.func
}

export default ConsentPage
