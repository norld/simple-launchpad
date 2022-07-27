import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectsList } from './storage/homeActions';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';
import api from 'utils/network/baseUrl.utils';
import ProgressBarMenu from 'components/progressBarMenu/progressBarMenu';
import Description from 'components/description/Description';
import Footer from 'components/footer/Footer';
import FAQ from 'components/faq/faq';
import Box from '@mui/material/Box';
import radar from 'assets/Iconsradar.svg';
import hourglass from 'assets/Iconshourglass.svg';
import doublecheck from 'assets/Iconsdoublecheck.svg';
import check from 'assets/Iconscheck.svg';
import add from 'assets/Iconsadd.svg';
import community from 'assets/communityLogo.svg';
import contract from 'assets/bsc-scan-logo.svg';
import copy from 'assets/Iconscopy.svg';
import greenWebsite from 'assets/greenGlobe.svg';
import greenWhitepaper from 'assets/greenWhitepaper.svg';
import bnb from 'assets/bnb-logo.svg';
import bscScan from 'assets/bsc-scan-logo.svg';
import eth from 'assets/ethLogo.svg';
import home from 'assets/home1.svg';
import 'styles/root.css';
import 'styles/home.css';

function Home(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [test, setTest] = useState();
  const projects = useSelector((state) => state.homeReducers.projects);
  useEffect(() => {
    dispatch(getProjectsList());
    setTest(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusObj = {
    OnSale: {
      text: 'On Sale',
      img: radar,
      status: test,
    },
    ComingSoon: {
      text: 'Coming Soon',
      img: hourglass,
      status: test,
    },
    Ended: {
      text: 'Ended',
      img: doublecheck,
      status: test,
    },
  };

  const chainObj = {
    97: {
      img: bnb,
      cur: 'BNB',
      scan: 'testnet.bscscan.com',
    },
    56: {
      img: bnb,
      cur: 'BNB',
      scan: 'bscscan.com',
    },
    1: {
      img: eth,
      cur: 'ETH',
      scan: 'etherscan.io',
    },
  };

  const OnDetail = (link) => {
    navigate(link);
  };

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div
              style={{
                color: 'white',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '2.5em',
                lineHeight: '140%',
              }}
            >
              {' '}
              <span
                style={{
                  background:
                    'linear-gradient(96.51deg, var(--primary-rgb) 2.96%, var(--secondary-rgb) 55.12%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Trusted
              </span>{' '}
              Platform for Crypto Launchpad
            </div>
            <p className="text-white py-3">
              Launching qualified projects on the crosschain Blockchain.
              Whitelist your address to get early-access to promising projects.
            </p>
            <div className="d-flex flex-wrap my-3">
              <div
                lg={6}
                className="rounded d-flex justify-content-center my-auto my-3 me-3 bg-gradient-color"
              >
                <Link
                  to="/request"
                  style={{ color: 'white', fontWeight: 700 }}
                  className="btn "
                >
                  <img src={add} alt="add icon" />
                  Apply project
                </Link>
              </div>
              <a
                href="https://github.com/norld/simple-launchpad"
                className="row px-3 my-3 align-items-center text-white"
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={community}
                  alt="community icon"
                  style={{ width: '54px', paddingLeft: '0px' }}
                />
                Community
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <img src={home} alt="home img" className="w-100" />
          </Col>
          <Col
            sm={12}
            className="align-items-center flex-wrap py-4 d-flex justify-content-center"
          >
            <img
              className="mx-1"
              src={bscScan}
              alt="bsc scan logo"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '1rem',
                borderRadius: '50px',
              }}
            />
            <span className="mx-1" style={{ color: 'white' }}>
              Token Contract:
            </span>
            <span
              className="mx-2 my-3 rounded"
              onClick={() =>
                navigator.clipboard.writeText(
                  '0x93a72ce957adaf60c74a5c7815ce7b3d0a7e6b48'
                )
              }
              style={{
                color: 'white',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '12px 20px',
              }}
            >
              {/* {truncateWalletAddress('0x1234567890987654321', 6)} */}
              {'0x93a72ce957adaf60c74a5c7815ce7b3d0a7e6b48'}
              <img
                className="rounded"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  marginLeft: '.75em',
                  cursor: 'pointer',
                }}
                src={copy}
                alt="copy icon"
              />
            </span>
          </Col>

          {projects.length ? (
            projects[0].data.map((item, idx) => {
              const itemAttr = item.attributes;
              const pool = projects[1].data.filter((token) => {
                return token.id === itemAttr.token.data.id;
              })[0];
              const poolAttr = pool.attributes;
              // const checkSharingRules = await lpadContract.checkSharingRules();
              if (itemAttr.VerifiedAt !== null) {
                return (
                  <Col lg={4} key={idx}>
                    <div
                      onClick={() => {
                        OnDetail('detail/' + item.id);
                      }}
                      role="button"
                      className="individualBox p-4 rounded pe-pointer my-3"
                    >
                      <div className="statuses">
                        <div
                          className={`status${itemAttr.StatusType[1]} d-flex align-items-center`}
                        >
                          <img
                            src={statusObj[itemAttr.StatusType[1]].img}
                            alt=""
                          />
                          <p className="statusText">
                            {statusObj[itemAttr.StatusType[1]].text}
                          </p>
                        </div>
                        <div className="status2">
                          <img
                            src={
                              itemAttr.StatusType[0] === 'Verify' ? check : ''
                            }
                            alt=""
                          />
                          <p className="statusText">
                            {itemAttr.StatusType[0] === 'Verify'
                              ? 'Audited'
                              : 'Not audited yet'}
                          </p>
                        </div>
                      </div>
                      <Box className="logoAndTitleBox">
                        <Box className="logoBox">
                          <div style={{ position: 'relative' }}>
                            {poolAttr.TokenLogo.data !== null ? (
                              <img
                                className="w80"
                                src={
                                  api.BASE_URL +
                                  poolAttr.TokenLogo.data.attributes.url
                                }
                                alt="token logo"
                              />
                            ) : (
                              <img src={''} alt="token zonk" />
                            )}
                            <img
                              src={
                                chainObj[poolAttr.chain.data.attributes.ChainID]
                                  .img
                              }
                              alt="chain logo"
                              style={{
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                height: '40px',
                              }}
                            />
                          </div>
                        </Box>
                        <Box className="titleBox">
                          <p className="titleBox1">
                            ${itemAttr.token.data.attributes.TokenSymbol}
                          </p>
                          <p className="titleBox2">
                            {itemAttr.token.data.attributes.TokenName}
                          </p>
                        </Box>
                        <Box className="otherLogoBox">
                          <a
                            href={`https://${
                              chainObj[poolAttr.chain.data.attributes.ChainID]
                                .scan
                            }/token/${
                              itemAttr.token.data.attributes.TokenAddress
                            }`}
                          >
                            <img src={contract} alt="contract" />
                          </a>
                          <a href={itemAttr.token.data.attributes.Link.Website}>
                            <img src={greenWebsite} alt="website" />
                          </a>
                          <a
                            href={
                              itemAttr.token.data.attributes.Link.Whitepaper
                            }
                          >
                            <img src={greenWhitepaper} alt="whitepaper" />
                          </a>
                        </Box>
                      </Box>
                      <Box className="launchpadInfo mt-3">
                        <div className="boxDetail">
                          <p className="stackingInfoTitle">Soft-Hard</p>
                          <span className="h6">
                            {itemAttr.Softcap} - {itemAttr.Hardcap}{' '}
                            {itemAttr.Currency}
                          </span>
                        </div>
                        <div className="boxDetail">
                          <p className="stackingInfoTitle">Starts</p>
                          <p>
                            {moment(itemAttr.LaunchDate).format('DD-MMM-YYYY')}
                          </p>
                        </div>
                        <div className="boxDetail">
                          <p className="stackingInfoTitle">Price</p>

                          <p className="h6">
                            1 {itemAttr.token.data.attributes.TokenSymbol} ={' '}
                            {itemAttr.Hardcap /
                              itemAttr.token.data.attributes
                                .TokenForPresale}{' '}
                            {item.attributes.Currency}
                          </p>
                        </div>
                      </Box>
                      <ProgressBarMenu item={item} />
                    </div>
                  </Col>
                );
              } else {
                return null;
              }
            })
          ) : (
            <>
              <h1>Empty</h1>
            </>
          )}
          <FAQ />
          <Description />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
