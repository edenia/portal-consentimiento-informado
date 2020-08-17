import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

import Modal from '../../components/Modal'

const useStyles = makeStyles((theme) => ({
  consentModalRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
    alignItems: 'center',
    height: '90%'
  },
  titleBox: {
    margin: theme.spacing(3, 0, 2, 0)
  },
  title: {
    color: '#0071b3',
    fontSize: 24,
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
    color: 'rgba(0, 0, 0, 0.87)'
  },
  infoBold: {
    fontSize: 16,
    lineHeight: '28px',
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: '500',
    marginTop: theme.spacing(2)
  },
  radioInput: {
    color: '#afb42b !important'
  },
  btnConsentModal: {
    border: '2px solid rgba(0, 0, 0, 0.12)',
    width: 138,
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
  btnConsentModalSave: {
    backgroundColor: '#0071b3',
    width: 138,
    height: 36,
    borderRadius: 20,
    '& .MuiButton-label': {
      color: '#fff',
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: 1.25,
      fontWeight: '500'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2)
    }
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end'
    }
  }
}))

const ConsentModal = ({
  openModal,
  setOpenModal,
  onChangeConsent,
  consentSelected
}) => {
  const classes = useStyles()
  const [value, setValue] = useState('false')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleChangeConsent = () => {
    onChangeConsent({
      status: value === 'true' || false,
      updatedTo: `${new Date()}`
    })
  }

  useEffect(() => {
    setValue(`${consentSelected.status}` || 'false')
  }, [openModal, consentSelected.status])

  return (
    <Modal openModal={openModal} setOpenModal={(value) => setOpenModal(value)}>
      <Box className={classes.consentModalRoot}>
        <Box>
          <Box className={classes.titleBox}>
            <Typography variant="h1" className={classes.title}>
              Modificar Consentimiento
            </Typography>
            <Typography variant="h3" className={classes.info}>
              Seleccione el estatus adecuado a su deseo de consentimiento
              informado para la siguiente entrada:
            </Typography>
            <Typography variant="h3" className={classes.infoBold}>
              Acceso a datos médicos en caso de emergencia
            </Typography>
            <Typography variant="h3" className={classes.info}>
              Otorgo acceso a datos médicos provenientes de mi expediente médico
              del EDUS. Estos datos incluyen especificamente entradas sobre
              género, alérgenos, patologías crónicas y virulencia.
            </Typography>
          </Box>

          <FormControl component="fieldset">
            <RadioGroup name="consent" value={value} onChange={handleChange}>
              <FormControlLabel
                value="true"
                control={<Radio className={classes.radioInput} />}
                label="Apruebo el consentimiento informado"
              />
              <FormControlLabel
                value="false"
                control={<Radio className={classes.radioInput} />}
                label="Niego el consentimiento informado"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className={classes.btnBox}>
          <Button
            className={classes.btnConsentModal}
            onClick={() => setOpenModal(false)}
          >
            cancelar
          </Button>
          <Button
            variant="contained"
            className={classes.btnConsentModalSave}
            onClick={handleChangeConsent}
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

ConsentModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  onChangeConsent: PropTypes.func,
  consentSelected: PropTypes.object
}

export default ConsentModal
