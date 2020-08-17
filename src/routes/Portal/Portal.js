import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/styles'
import {
  Route,
  Redirect,
  Switch,
  useLocation,
  useHistory
} from 'react-router-dom'
import { Backdrop } from '@eoscostarica/eoscr-components'

import { MainContainer } from '../../containers'
import portalBG from '../../assets/portalBG.png'

import LoginModal from './LoginModal'
import HistoryModal from './HistoryModal'
import ConsentModal from './ConsentModal'
import SideBar from './SideBar'
import TopBar from './TopBar'
import { Home, HomeBackLayer } from './Home'
import { ConsentPage, ConsentBackLayer } from './Consent'

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
  const [layerHeight, setLayerHeight] = useState(0)
  const [consentSelected, setConsentSelected] = useState({})
  const [historySelected, setHistorySelected] = useState([])
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openHistoryModal, setOpenHistoryModal] = useState(false)
  const [openConsentModal, setOpenConsentModal] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  })

  const handleLogin = () => {
    setOpenLoginModal(false)
    history.push('/portal/consent')
  }

  const handleLogout = () => {
    localStorage.setItem('user', '')
    history.push('/portal/home')
  }

  const handleChangeConsent = (consentUpdated) => {
    setOpenConsentModal(false)
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const history = user.history[consentSelected.key]

    localStorage.setItem(
      'user',
      JSON.stringify({
        ...user,
        consent: { ...user.consent, [consentSelected.key]: consentUpdated },
        history: {
          ...user.history,
          [consentSelected.key]: [...history, consentUpdated]
        }
      })
    )
  }

  const backLayer = (
    <div className={classes.frontLayer}>
      <Switch>
        <Route exact path="/portal/home">
          <HomeBackLayer setOpenLoginModal={setOpenLoginModal} />
        </Route>
        <Route exact path="/portal/consent">
          <ConsentBackLayer />
        </Route>
        <Redirect from="/portal" to="/portal/home" />
      </Switch>
    </div>
  )

  const frontLayer = (
    <div className={classes.frontLayer}>
      <Switch>
        <Route exact path="/portal/home">
          <Home setOpenLoginModal={setOpenLoginModal} />
        </Route>
        <Route exact path="/portal/consent">
          <ConsentPage
            setOpenConsentModal={setOpenConsentModal}
            setConsentSelected={setConsentSelected}
            setHistorySelected={setHistorySelected}
            setOpenHistoryModal={setOpenHistoryModal}
          />
        </Route>
        <Redirect from="/portal" to="/portal/home" />
      </Switch>
    </div>
  )

  useEffect(() => {
    if (isMobile && location.pathname === '/portal/home') {
      setLayerHeight(100)
      setUseTranparentBackground(true)

      return
    }

    if (!isMobile && location.pathname === '/portal/home') {
      setLayerHeight(850)
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
          backLayer={backLayer}
          frontLayer={frontLayer}
          backgroundColor="#1976d2"
          layerHeightUp={layerHeight}
          layerHeightDown={100}
          isStaticPage={!useTranparentBackground}
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
          consentSelected={consentSelected.data || {}}
        />
        <HistoryModal
          openModal={openHistoryModal}
          setOpenModal={setOpenHistoryModal}
          historySelected={historySelected}
        />
      </div>
    </MainContainer>
  )
}

Portal.propTypes = {
  ual: PropTypes.object
}

export default Portal
