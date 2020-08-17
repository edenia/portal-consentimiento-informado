import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import Modal from '../../components/Modal'

const useStyles = makeStyles((theme) => ({
  historyContent: {
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
  rows: {
    width: '100%',
    marginBottom: theme.spacing(2)
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
  successPermission: {
    color: '#cddc39',
    backgroundColor: 'transparent'
  },
  deniedPermission: {
    color: '#b00020',
    backgroundColor: 'transparent'
  },
  secondaryText: {
    fontSize: 11.8,
    lineHeight: 1.35,
    letterSpacing: '0.4px',
    color: 'rgba(0, 0, 0, 0.6)'
  }
}))

const HistoryModal = ({ openModal, setOpenModal, historySelected }) => {
  const classes = useStyles()
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const getFormatDate = (date) => {
    const consentDate = new Date(date)

    return ` ${consentDate.toLocaleTimeString(
      'es-ES'
    )}, ${consentDate.toLocaleDateString('es-ES', options)}`
  }

  return (
    <Modal openModal={openModal} setOpenModal={(value) => setOpenModal(value)}>
      <Box className={classes.historyContent}>
        <Box className={classes.titleBox}>
          <Typography variant="h1" className={classes.title}>
            Historial de Cambios
          </Typography>
          <Typography variant="h3" className={classes.info}>
            Cambios de estatus de consentimiento informado para:
          </Typography>
          <Typography variant="h3" className={classes.info}>
            <strong>Acceso a datos médicos en caso de emergencia</strong>
          </Typography>
        </Box>

        <Box className={classes.rows}>
          <List className={classes.root}>
            {historySelected.map((history, index) => {
              return (
                <div key={`${index}-history`}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        className={clsx({
                          [classes.deniedPermission]: !history.status,
                          [classes.successPermission]: history.status
                        })}
                      >
                        {history.status ? (
                          <CheckCircleIcon />
                        ) : (
                          <HighlightOffIcon />
                        )}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      classes={{ secondary: classes.secondaryText }}
                      primary={!history.status ? ' Denegado' : ' Aprobado'}
                      secondary={getFormatDate(history.updatedTo)}
                    />
                  </ListItem>
                  <Divider />
                </div>
              )
            })}
          </List>
        </Box>

        <Button
          className={classes.btnPortal}
          onClick={() => setOpenModal(false)}
        >
          Cerrar
        </Button>
      </Box>
    </Modal>
  )
}

HistoryModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  historySelected: PropTypes.array
}

export default HistoryModal
