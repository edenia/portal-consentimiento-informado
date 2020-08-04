import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/styles'
// import { Backdrop } from '@eoscostarica/eoscr-components'
import {
  Route,
  Redirect,
  Switch,
  useLocation,
  useHistory
} from 'react-router-dom'

import { MainContainer } from '../../containers'
import portalBG from '../../assets/portalBG.png'
import Backdrop from '../../components/Backdrop'

import LoginModal from './LoginModal'
import ConsentModal from './ConsentModal'
import SideBar from './SideBar'
import TopBar from './TopBar'
import BackLayer from './BackLayer'
import { Home } from './Home'
import { ConsentPage } from './Consent'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: 'relative',
    width: '100vw',
    height: '100vh', // 'calc(100vh - 64px)',
    overflowY: 'hidden',
    [theme.breakpoints.up('sm')]: {
      height: '100vh'
    }
  },
  frontLayer: {
    height: '100%',
    overflowY: 'auto',
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(32),
      paddingLeft: theme.spacing(32)
    }
  },
  backLayer: {
    overflowY: 'auto',
    paddingBottom: 10
  },
  headerBox: {
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(32),
      paddingLeft: theme.spacing(32)
    }
  },
  menu: {
    flexGrow: 1,
    marginTop: 80
  },
  menuButton: {
    marginRight: 16
  },
  title: {
    flexGrow: 1
  },
  labelBackdrop: {
    fontSize: 20.2,
    fontWeight: 600,
    letterSpacing: '0.25px',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  headerBoxNone: {
    display: 'none'
  },
  backgroundLayer: {
    background:
      'linear-gradient(180deg, rgba(0,113,179,1) 0%, rgba(0,170,218,0.49763655462184875) 100%);',
    borderWidth: 2,
    borderStyle: 'solid',
    borderImage:
      'linear-gradient( to bottom, #0071b3, rgba(0, 0, 0, 0)) 1 100%',
    borderBottomWidth: 0
  },
  portalBG: {
    backgroundImage: `url(${portalBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
}))

const Portal = ({ ual }) => {
  const classes = useStyles()
  const location = useLocation()
  const history = useHistory()
  const theme = useTheme()

  const [openSidebar, setOpenSidebar] = useState(false)
  const [useTranparentBackground, setUseTranparentBackground] = useState(false)
  const [layerHeight, setLayerHeight] = useState(85)
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openConsentModal, setOpenConsentModal] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  })

  const handleLogin = (values) => {
    setOpenLoginModal(false)
    localStorage.setItem('username', values)
    history.push('/portal/consent')
  }

  const handleLogout = () => {
    localStorage.setItem('username', '')
    history.push('/portal/home')
  }

  const handleChangeConsent = (key, value) => {
    setOpenConsentModal(false)
    localStorage.setItem(key, value)
  }

  const frontLayer = (
    <div className={classes.frontLayer}>
      <Switch>
        <Route exact path="/portal/home">
          <Home setOpenLoginModal={setOpenLoginModal} />
        </Route>
        <Route exact path="/portal/consent">
          <ConsentPage setOpenConsentModal={setOpenConsentModal} />
        </Route>
        <Redirect from="/portal" to="/portal/home" />
      </Switch>
    </div>
  )

  useEffect(() => {
    if (isMobile && location.pathname === '/portal/home') {
      setLayerHeight(85)
      setUseTranparentBackground(true)

      return
    }

    if (!isMobile && location.pathname === '/portal/home') {
      setLayerHeight(85)
      setUseTranparentBackground(true)

      return
    }

    setLayerHeight(200)
    setUseTranparentBackground(false)
  }, [isMobile, location.pathname])

  return (
    <MainContainer
      openSidebar={openSidebar}
      useTranparentBackground={useTranparentBackground}
      setOpenSidebar={setOpenSidebar}
      topbarContent={
        <TopBar
          user={null}
          onLogout={handleLogout}
          setOpenLoginModal={setOpenLoginModal}
        />
      }
      sidebarContent={
        <SideBar
          user={{}}
          onLogout={() => {}}
          setOpenSidebar={setOpenSidebar}
        />
      }
    >
      <div>
        <Backdrop
          className={classes.backdrop}
          classes={{
            root: classes.portalBG,
            headerBox: classes.headerBoxNone
          }}
          backLayer={
            <BackLayer
              pathname={location.pathname}
              setOpenLoginModal={setOpenLoginModal}
            />
          }
          frontLayer={frontLayer}
          backgroundColor="#1976d2"
          layerHeight={layerHeight}
          isStaticPage
          startCollapsible={useTranparentBackground}
        />
        <LoginModal
          openModal={openLoginModal}
          setOpenModal={setOpenLoginModal}
          onLogin={handleLogin}
        />
        <ConsentModal
          openModal={openConsentModal}
          setOpenModal={setOpenConsentModal}
          onChangeConsent={handleChangeConsent}
        />
      </div>
    </MainContainer>
  )
}

Portal.propTypes = {
  ual: PropTypes.object
}

export default Portal
