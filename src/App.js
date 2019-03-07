import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import injectStyle from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLanguage, faAt } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal';

// library.add(fab);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      infoType: 'all'
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appWrapper}>
        <div className={classes.appHeader}>
          <Fade cascade>
            <h1 className={classes.headerTitle}>Nicolás Díaz Soler</h1>
          </Fade>
        </div>
        <Fade delay={500} cascade>
          <div className={classes.text}>
            <p>Argentinian English-Spanish Translator, specialised in Marketing, Software &amp; Videogames. Grammar and pronunciation nerd. <a href='https://en.wikipedia.org/wiki/English_as_a_second_or_foreign_language'>ESL</a> teacher. British English, mate.</p>
          </div>
        </Fade>
        <Fade delay={1000} cascade>
          <div className={classes.text}>
            <p>Junior Software Developer. JavaScript, ReactJS &amp; MySQL. Looking forward to jump into React Native.</p>
          </div>
        </Fade>
        <Fade delay={1500} cascade>
          <div className={classes.appFooter}>
            <ButtonToolbar className={classes.iconToolbar}>
              <div className={classes.socialIcon}><a href="https://twitter.com/njdiaz90/"><FontAwesomeIcon icon={faTwitter} size="3x" className={classes.icon} /></a></div>
              <div className="social-icon"><a href="https://github.com/njdiaz90/"><FontAwesomeIcon icon={faGithub} size="3x" className={classes.icon} /></a></div>
              <div className="social-icon"><a href="https://www.linkedin.com/in/njdst/"><FontAwesomeIcon icon={faLinkedin} size="3x" className={classes.icon} /></a></div>
              <div className="social-icon"><a href="https://www.upwork.com/o/profiles/users/_~014e308c50ce78460b/"><FontAwesomeIcon icon={faLanguage} size="3x" className={classes.icon} /></a></div>
              <div className="social-icon"><a href="https://localhost:3000"><FontAwesomeIcon icon={faAt} size="3x" className={classes.icon} /></a></div>
            </ButtonToolbar>
          </div>
        </Fade>
      </div>
    );
  }
}

const styles = {
  appHeader: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
  },
  appFooter: {

  },
  appLink: {
    color: '#61dafb',
  },
  appWrapper: {
    color: 'white',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    margin: '0 15vw',
    minHeight: '100vh',
    padding: '0',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: '4.5rem',
    fontWeight: 'bold',
  },
  iconToolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    borderRadius: '50%',
    margin: '1rem',
    width: '3rem',
    height: '3rem',
  },
  text: {
    fontSize: '1.25rem'
  }
}

export default injectStyle(styles)(App);
