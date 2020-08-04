import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

import { HomeBackLayer } from './Home'
import { ConsentBackLayer } from './Consent'

const useStyles = makeStyles((theme) => ({
  backLayer: {
    height: '100%',
    overflowY: 'auto',
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(32),
      paddingLeft: theme.spacing(32)
    }
  }
}))

const BackLayers = ({ pathname, setOpenLoginModal }) => {
  const classes = useStyles()

  switch (pathname) {
    case '/portal/home':
      return (
        <div className={classes.backLayer}>
          <HomeBackLayer setOpenLoginModal={setOpenLoginModal} />
        </div>
      )

    case '/portal/consent':
      return (
        <div className={classes.backLayer}>
          <ConsentBackLayer />
        </div>
      )

    default:
      return (
        <div className={classes.backLayer}>
          <HomeBackLayer setOpenLoginModal={setOpenLoginModal} />
        </div>
      )
  }
}

BackLayers.propTypes = {
  pathname: PropTypes.string,
  setOpenLoginModal: PropTypes.func
}

export default BackLayers
