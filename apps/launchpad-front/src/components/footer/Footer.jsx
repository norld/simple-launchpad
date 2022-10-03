import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from 'assets/logo.png';
import telegram from 'assets/Iconstelegram.svg';
import twitter from 'assets/Iconstwitter.svg';
import discord from 'assets/Iconsdiscord.svg';
import facebook from 'assets/Iconsfb.svg';
import bscScan from 'assets/bsc-scan-logo.svg';
const data = {
  twitter: {
    icon: twitter,
    link: 'https://twitter.com/tokendooit',
  },
  discord: {
    icon: discord,
    link: 'https://twitter.com/tokendooit',
  },
  telegram: {
    icon: telegram,
    link: 'https://twitter.com/tokendooit',
  },
  bscScan: {
    icon: bscScan,
    link: 'https://twitter.com/tokendooit',
  },
  facebook: {
    icon: facebook,
    link: 'https://www.facebook.com/tokendooit/',
  },
};

function Footer() {
  return (
    <>
      <div className="container">
        <Row sm={12} className="pb-5">
          <Col lg={3}>
            <img src={logo} alt="logo" style={{ width: '50px' }} />{' '}
            <span className="text-white"> Launchpad</span>
          </Col>
          <Col lg={6}>
            <span style={{ color: 'white' }}>
              Launching qualified projects on the crosschain Blockchain.
              Whitelist your address to get early-access to promising projects.
            </span>
          </Col>
          <Col lg={3}>
            <a className="socmedLink" href={data.twitter.link}>
              <img src={data.twitter.icon} alt="twitterIcon" />
            </a>
            <a className="socmedLink" href={data.discord.link}>
              <img src={data.discord.icon} alt="discordIcon" />
            </a>
            <a className="socmedLink" href={data.telegram.link}>
              <img src={data.telegram.icon} alt="telegramIcon" />
            </a>
            <a className="socmedLink" href={data.bscScan.link}>
              <img src={data.bscScan.icon} alt="bscScanIcon" />
            </a>
            <a className="socmedLink" href={data.facebook.link}>
              <img src={data.facebook.icon} alt="fbIcon" />
            </a>
          </Col>
        </Row>
        <Col sm={12}>
          <Row className="text-white py-5">
            <Col lg={3}>
              <span>General</span>
              <br />
              <div className="d-flex flex-wrap my-3">
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://dooit.exchange/"
                >
                  Exchange
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://staking.dooit.exchange/"
                >
                  Staking
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://www.tokendooit.com/download/DOOit-Wallet-Whitepaper.pdf"
                >
                  Whitepaper
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://blog.tokendooit.com/"
                >
                  Blog
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <span>Audits</span>
              <br />
              <div className="d-flex flex-wrap my-3">
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://solidity.finance/audits/DOOiT/"
                >
                  Solidity Finance
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <span>Social Media</span>
              <br />
              <div className="d-flex flex-wrap my-3">
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://www.instagram.com/tokendooit/"
                >
                  Instagram
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://twitter.com/tokendooit"
                >
                  Twitter
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://www.facebook.com/tokendooit/"
                >
                  Facebook
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://www.youtube.com/c/tokendooit"
                >
                  Youtube
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <span>Token</span>
              <br />
              <div className="d-flex flex-wrap my-3">
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://www.dextools.io/app/bsc/pair-explorer/0x582bfe19e1a9c55797932b308da24ef9de5bd725"
                >
                  Chart
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://coinmarketcap.com/currencies/dooit-token/"
                >
                  Coin Marketcap
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://pancakeswap.finance/info/token/0x93a72ce957adaf60c74a5c7815ce7b3d0a7e6b48"
                >
                  Pancake Swap
                </a>
                <a
                  className="w-100 text-white"
                  style={{ textDecoration: 'none' }}
                  href="https://bscscan.com/token/0x93a72ce957adaf60c74a5c7815ce7b3d0a7e6b48"
                >
                  BSC Scan
                </a>
              </div>
            </Col>
          </Row>
        </Col>
        <Row
          className="d-flex"
          style={{ justifyContent: 'space-between', paddingBottom: '50px' }}
          sm={12}
        >
          <Col lg={4}>
            <span style={{ color: 'white' }}>
              Copyright ©
              <script>document.write(new Date().getFullYear()</script>
              Launchpad
            </span>
          </Col>
          <Col
            className="d-flex"
            lg={6}
            style={{ justifyContent: 'space-between' }}
          >
            <span>
              <a
                href="https://tokendooit.com/terms/"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Terms and Condition
              </a>
            </span>
            <span>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                Privacy and Policy
              </a>
            </span>
            <span>
              <a
                href="mailto:cs@tokendooit.com"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Contact us
              </a>
            </span>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
