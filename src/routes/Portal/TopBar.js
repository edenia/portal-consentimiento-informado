import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import AccessibleIcon from '@material-ui/icons/Accessible'

const useStyles = makeStyles((theme) => ({
  sessionText: {
    marginLeft: 5,
    color: theme.palette.primary.contrastText,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline'
    }
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  box: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1
  }
}))

const Topbar = ({ user, onLogout, onLogin, setOpenLoginModal }) => {
  const classes = useStyles()
  const userName = localStorage.getItem('username')

  return (
    <Box className={classes.box}>
      <IconButton color="inherit">
        <AccessibleIcon />
        <Typography className={classes.sessionText} variant="subtitle1">
          ACCESIBILIDAD
        </Typography>
      </IconButton>
      <IconButton color="inherit">
        <ContactSupportIcon />
        <Typography className={classes.sessionText} variant="subtitle1">
          AYUDA
        </Typography>
      </IconButton>
      {userName && (
        <Box>
          <IconButton color="inherit">
            <AccountCircleIcon />
            <Typography className={classes.sessionText} variant="subtitle1">
              {userName}
            </Typography>
          </IconButton>
          <IconButton color="inherit" onClick={onLogout}>
            <LogoutIcon />
          </IconButton>
        </Box>
      )}
      {!userName && (
        <IconButton color="inherit" onClick={() => setOpenLoginModal(true)}>
          <FingerprintIcon />
          <Typography className={classes.sessionText} variant="subtitle1">
            INGRESO
          </Typography>
        </IconButton>
      )}
    </Box>
  )
}

Topbar.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func,
  onLogin: PropTypes.func,
  setOpenLoginModal: PropTypes.func
}

export default Topbar
