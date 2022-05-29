import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer section-container ${props.rootClassName} `}
    >
      <div className="footer-max-width max-content-container">
        <div className="footer-banner">
          <h1 className="footer-text heading2">
            <span className="">REGISTER NOW FOR</span>
            <br className=""></br>
            <span className="">PreSAle</span>
          </h1>
          <span className="footer-text3">
            <span className="">
              Whitelist your wallets to mint at 0.01ETH instead of 0.02ETH
            </span>
          </span>
          <div className="footer-btns-container">
            <button className="footer-register-now button-primary button-lg button">
              DISCORD
            </button>
            <button className="footer-contact-us button button-outline button-lg-border">
              TWITTER
            </button>
          </div>
        </div>
        <div className="footer-copyright">
          <span className="footer-text5">
            <span className="">
              <span className="">
                Special Thanks to all LRC enthusiasts who bought our genesis LRC
                ERC 1155 Loopy collection.
              </span>
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  rootClassName1: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default Footer
