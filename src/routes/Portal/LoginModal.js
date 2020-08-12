import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Modal from '../../components/Modal'

const useStyles = makeStyles((theme) => ({
  loginContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
    alignItems: 'center'
  },
  btnPortal: {
    backgroundColor: '#0071b3',
    width: 138,
    height: 36,
    borderRadius: 15,
    '& .MuiButton-label': {
      color: '#fff',
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: 1.25,
      fontWeight: '500'
    }
  },
  inputs: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& .MuiTextField-root': {
      width: '100%',
      marginBottom: theme.spacing(3)
    },
    [theme.breakpoints.up('sm')]: {
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(4)
      }
    }
  },
  titleBox: {
    margin: theme.spacing(3, 0, 2, 0)
  },
  title: {
    color: '#0071b3',
    fontSize: 24,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: 24,
      letterSpacing: 0.25
    }
  },
  info: {
    fontSize: 16,
    lineHeight: '28px',
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  link: {
    marginTop: theme.spacing(6),
    fontSize: 14,
    lineHeight: '16px',
    letterSpacing: 1.5,
    color: 'rgba(0, 0, 0, 0.87)'
  }
}))

const LoginModal = ({ openModal, setOpenModal, onLogin }) => {
  const classes = useStyles()
  const [userLogin, setUserLogin] = useState('')
  const [loginError, setLoginError] = useState({
    user: { isError: false, message: '' },
    password: { isError: false, message: 'Usuario o contraseña incorrecto' }
  })

  const handlerSetData = () => {
    if (!userLogin) {
      setLoginError({
        user: { ...loginError.user, isError: true },
        password: { ...loginError.password, isError: true }
      })

      return
    }

    setLoginError({
      user: { ...loginError.user, isError: false },
      password: { ...loginError.password, isError: false }
    })

    onLogin(userLogin)
  }

  return (
    <Modal openModal={openModal} setOpenModal={(value) => setOpenModal(value)}>
      <Box className={classes.loginContent}>
        <Box className={classes.titleBox}>
          <Typography variant="h1" className={classes.title}>
            Acceso de Usuarios
          </Typography>
          <Typography variant="h3" className={classes.info}>
            Ingrese su usuario y contraseña para accesar el sistema.
          </Typography>
        </Box>

        <Box className={classes.inputs}>
          <form noValidate autoComplete="off">
            <TextField
              error={loginError.user.isError}
              label="Usuario"
              variant="filled"
              onChange={(e) => setUserLogin(e.target.value)}
            />
            <TextField
              error={loginError.password.isError}
              helperText={
                loginError.password.isError ? loginError.password.message : ''
              }
              label="Contraseña"
              variant="filled"
              type="password"
              autoComplete="current-password"
            />
          </form>
        </Box>

        <Button className={classes.btnPortal} onClick={handlerSetData}>
          Ingresar
        </Button>
        <Typography variant="h3" className={classes.link}>
          RECUPERAR CONTRASEÑA
        </Typography>
      </Box>
    </Modal>
  )
}

LoginModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  onLogin: PropTypes.func
}

export default LoginModal
