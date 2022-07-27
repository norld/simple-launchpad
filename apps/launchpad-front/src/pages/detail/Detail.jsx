/* eslint-disable no-undef */
import React, {
  useEffect,
  // useState
} from 'react';
import './detail.css';
import hourglass from 'assets/Iconshourglass.svg';
import radar from 'assets/Iconsradar.svg';
import doublecheck from 'assets/Iconsdoublecheck.svg';
import Box from '@mui/material/Box';
import bscScan from 'assets/bsc-scan-logo.svg';
import globe from 'assets/globeLogo.svg';
import whitepaper from 'assets/whitepaperLogo.svg';
import telegram from 'assets/Iconstelegram.svg';
import twitter from 'assets/Iconstwitter.svg';
import discord from 'assets/Iconsdiscord.svg';
import fb from 'assets/Iconsfb.svg';
import bnb from 'assets/bnb-logo.svg';
import eth from 'assets/ethLogo.svg';
import Countdown from 'components/countdown/Countdown';
import Buy from 'components/sidebar/Buy';
import ClaimButton from 'components/claim/Claim';
import api from 'utils/network/baseUrl.utils';
import moment from 'moment';
import ProgressBarMenu from 'components/progressBarMenu/progressBarMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTheProject } from './storage/detailActions';
import { launchpad as launchpadABI } from 'common/abis/launchpad';
import Footer from 'components/footer/Footer';

function Detail(props) {
  const [counter] = React.useState(60);
  const [limit, setLimit] = React.useState(false);
  const [receive, setReceive] = React.useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();

  const theProject = useSelector((state) => state.detailReducers.theProject);
  useEffect(() => {
    counter > 0 && setTimeout(() => {}, 1000);
  }, [counter]);

  useEffect(() => {
    dispatch(getTheProject(false, { id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = async (token) => {
    if (window.$web3) {
      const tokenLaunchpadContract = new window.$web3.eth.Contract(
        launchpadABI,
        token.PoolAddress
      );
      const _record = await tokenLaunchpadContract.methods
        .getBuyRecord(window.$account[0])
        .call();
      if (_record) {
        if (_record[0] >= theProject[0].data.attributes.MaxTimes)
          setLimit(false);
        setReceive(_record[2].toString());
      }
    }
  };

  useEffect(() => {
    if (theProject[0]) init(theProject[0].data.attributes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theProject]);

  const statusObj = {
    OnSale: {
      text: 'On Sale',
      img: radar,
    },
    ComingSoon: {
      text: 'Coming Soon',
      img: hourglass,
    },
    Ended: {
      text: 'Ended',
      img: doublecheck,
    },
  };

  const chainObj = {
    1: {
      img: bnb,
      cur: 'BNB',
      scan: 'bscscan.com',
    },
    2: {
      img: eth,
      cur: 'ETH',
      scan: 'etherscan.io',
    },
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
  };

  return (
    <>
      {theProject.length ? (
        <>
          <Container>
            <Row className="flex-lg-row-reverse mb-5">
              <Col lg={4}>
                <Box className="my-3">
                  {theProject[0].data.attributes.StatusType[1] ===
                  'ComingSoon' ? (
                    <>
                      <Countdown item={theProject[0].data} />
                    </>
                  ) : theProject[0].data.attributes.StatusType[1] ===
                    'OnSale' ? (
                    <>
                      <Countdown item={theProject[0].data} />
                      <ProgressBarMenu item={theProject[0].data} />
                      <Buy
                        token={theProject[1].data.attributes}
                        launchpad={theProject[0].data.attributes}
                        gblog={limit}
                      />
                    </>
                  ) : theProject[0].data.attributes.StatusType[1] ===
                    'Ended' ? (
                    <>
                      <Countdown item={theProject[0].data} />
                      <ProgressBarMenu item={theProject[0].data} />
                      <ClaimButton item={theProject[0].data.attributes} />
                    </>
                  ) : (
                    <></>
                  )}

                  <div className="detailsInfo presaleInfo p-3 mt-3 rounded">
                    <div className="boxDetail">
                      <p className="boxDetailTitle">Status</p>
                      <p className="boxDetailContent">
                        {
                          statusObj[theProject[0].data.attributes.StatusType[1]]
                            .text
                        }
                      </p>
                    </div>
                    <hr className="hr" />
                    <div className="boxDetail">
                      <p className="boxDetailTitle">Minimum Buy</p>
                      <p className="boxDetailContent">
                        {Number(
                          theProject[0].data.attributes.MinContribution
                        ).toLocaleString()}{' '}
                        {theProject[0].data.attributes.Currency}
                      </p>
                    </div>
                    <hr className="hr" />
                    <div className="boxDetail">
                      <p className="boxDetailTitle">Maximum Buy</p>
                      <p className="boxDetailContent">
                        {Number(
                          theProject[0].data.attributes.MaxContribution
                        ).toLocaleString()}{' '}
                        {theProject[0].data.attributes.Currency}
                      </p>
                    </div>
                    <hr className="hr" />
                    <div className="boxDetail">
                      <p className="boxDetailTitle">My Contribution</p>
                      <p className="boxDetailContent">
                        {receive}{' '}
                        {/* {toSmallUnit(
                          Number(receive),
                          Number(theProject[1].data.attributes.TokenDecimal)
                        )}{' '}
                        {console.log(
                          receive,
                          theProject[1].data.attributes.TokenDecimal
                        )} */}
                        {theProject[1].data.attributes.TokenSymbol}
                      </p>
                    </div>
                  </div>
                </Box>
              </Col>
              <Col lg={8}>
                <Box>
                  <Box
                    className={`status${theProject[0].data.attributes.StatusType[1]} my-3 d-flex align-items-center p-3 rounded`}
                  >
                    <img
                      className="pe-1"
                      src={
                        statusObj[theProject[0].data.attributes.StatusType[1]]
                          .img
                      }
                      alt="status img"
                    />
                    <p className="text-white my-0">
                      {
                        statusObj[theProject[0].data.attributes.StatusType[1]]
                          .text
                      }
                    </p>
                  </Box>
                  <Box className="details p-4 rounded">
                    <Box className="d-flex pb-3">
                      <Box className="logo">
                        <img
                          className="logo"
                          src={
                            api.BASE_URL +
                            theProject[1].data.attributes.TokenLogo.data
                              .attributes.url
                          }
                          alt="brand Logo"
                        />
                      </Box>
                      <Box className="title">
                        <p className="token">
                          ${theProject[1].data.attributes.TokenSymbol}
                        </p>
                        <p className="party">
                          {theProject[1].data.attributes.TokenName}
                        </p>
                      </Box>
                    </Box>
                    <Box>
                      <p className="description">
                        {theProject[1].data.attributes.TokenDescription}
                      </p>
                    </Box>
                    <Box className="buttonBox my-3">
                      <a
                        style={{ color: 'transparent' }}
                        href={`https://${
                          chainObj[
                            theProject[1].data.attributes.chain.data.attributes
                              .ChainID
                          ].scan
                        }/token/${theProject[1].data.attributes.TokenAddress}`}
                      >
                        <button className="button rounded px-3 bg-gradient-color">
                          <img src={bscScan} alt="bsc scan logo" />
                          <p className="contractLink">Check Contract</p>
                        </button>
                      </a>
                      <a
                        style={{ color: 'transparent' }}
                        href={theProject[1].data.attributes.Link.Website}
                      >
                        <button className="button rounded px-3 bg-gradient-color">
                          <img src={globe} alt="globe logo" />
                          <p className="contractLink">Website</p>
                        </button>
                      </a>
                      <a
                        style={{ color: 'transparent' }}
                        href={theProject[1].data.attributes.Link.Whitepaper}
                      >
                        <button className="button rounded px-3 bg-gradient-color">
                          <img src={whitepaper} alt="whitepaper logo" />
                          <p className="contractLink">Whitepaper</p>
                        </button>
                      </a>
                    </Box>
                    <Box className="socmed">
                      {theProject[1].data.attributes.Link.Telegram ? (
                        <a
                          className="socmedLink"
                          href={theProject[1].data.attributes.Link.Telegram}
                        >
                          <img src={telegram} alt="telegramIcon" />
                        </a>
                      ) : (
                        <span></span>
                      )}
                      {theProject[1].data.attributes.Link.Twitter ? (
                        <a
                          className="socmedLink"
                          href={theProject[1].data.attributes.Link.Twitter}
                        >
                          <img src={twitter} alt="twitterIcon" />
                        </a>
                      ) : (
                        <span></span>
                      )}
                      {theProject[1].data.attributes.Link.Discord ? (
                        <a
                          className="socmedLink"
                          href={theProject[1].data.attributes.Link.Discord}
                        >
                          <img src={discord} alt="discordIcon" />
                        </a>
                      ) : (
                        <span></span>
                      )}
                      {theProject[1].data.attributes.Link.Facebook ? (
                        <a
                          className="socmedLink"
                          href={theProject[1].data.attributes.Link.Facebook}
                        >
                          <img src={fb} alt="fbIcon" />
                        </a>
                      ) : (
                        <span></span>
                      )}
                    </Box>
                  </Box>
                  <Box className="poolDetails">
                    <h2 className="detailsTitle mx-0 py-3 h4">Pool Details</h2>
                    <div className="detailsInfo presaleInfo p-3 rounded">
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Presale Start Time</p>
                        <div className="presaleTime">
                          {theProject[0].data.attributes.LaunchDate ? (
                            <>
                              <p className="boxDetailContent">
                                {moment
                                  .utc(theProject[0].data.attributes.LaunchDate)
                                  .format('MMMM DD, YYYY hh:mm')}{' '}
                                (UTC)
                              </p>
                              <p className="presaleStartTimeGMT">
                                {moment(
                                  theProject[0].data.attributes.LaunchDate
                                ).format('MMMM DD, YYYY hh:mm')}{' '}
                                (GMT+8)
                              </p>
                            </>
                          ) : (
                            <p>Not decided yet</p>
                          )}
                        </div>
                      </div>
                      <hr className="hr" />
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Presale End Time</p>
                        <div className="presaleTime">
                          {theProject[0].data.attributes.EndDate ? (
                            <>
                              <p className="boxDetailContent">
                                {moment
                                  .utc(theProject[0].data.attributes.EndDate)
                                  .format('MMMM DD, YYYY hh:mm')}{' '}
                                (UTC)
                              </p>
                              <p className="presaleStartTimeGMT">
                                {moment(
                                  theProject[0].data.attributes.EndDate
                                ).format('MMMM DD, YYYY hh:mm')}{' '}
                                (GMT+8)
                              </p>
                            </>
                          ) : (
                            <p>Not decided yet</p>
                          )}
                        </div>
                      </div>
                      <hr className="hr" />
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Swap Rate</p>
                        <p className="boxDetailContent">
                          {`1 ${theProject[0].data.attributes.Currency} = ${
                            theProject[0].data.attributes.token.data.attributes
                              .TokenForPresale /
                            theProject[0].data.attributes.Hardcap
                          } ${theProject[1].data.attributes.TokenSymbol}`}{' '}
                        </p>
                      </div>
                      <hr className="hr" />
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Soft Cap</p>
                        <p className="boxDetailContent">
                          {Number(
                            theProject[0].data.attributes.Softcap
                          ).toLocaleString()}{' '}
                        </p>
                      </div>
                      <hr className="hr" />
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Hard Cap</p>
                        <p className="boxDetailContent">
                          {Number(
                            theProject[0].data.attributes.Hardcap
                          ).toLocaleString()}{' '}
                        </p>
                      </div>
                    </div>
                  </Box>
                  <Box className="tokenDetails">
                    <h2 className="detailsTitle mx-0 py-3 h4">Token Detail</h2>
                    <div className="detailsInfo presaleInfo p-3 rounded">
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Token</p>
                        <p className="boxDetailContent">
                          {theProject[1].data.attributes.TokenSymbol}
                        </p>
                      </div>
                      <hr className="hr" />
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Blockchain</p>
                        <p className="boxDetailContent">
                          {
                            theProject[1].data.attributes.chain.data.attributes
                              .ChainName
                          }
                        </p>
                      </div>
                      <hr className="hr" />
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Token Decimals</p>
                        <p className="boxDetailContent">
                          {theProject[1].data.attributes.TokenDecimal}
                        </p>
                      </div>
                      <hr className="hr" />
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Token Address</p>
                        <p className="boxDetailContent">
                          {theProject[1].data.attributes.TokenAddress}
                        </p>
                      </div>
                      <hr className="hr" />
                      <div className="boxDetail">
                        <p className="boxDetailTitle">Total Supply</p>
                        <p className="boxDetailContent">
                          {Number(
                            theProject[1].data.attributes.TokenTotalSupply
                          ).toLocaleString()}{' '}
                        </p>
                      </div>
                    </div>
                  </Box>
                  {/* <Box className="tokenomics">
                    <h2 className="detailsTitle mx-0 py-3 h4">Tokenomic</h2>
                    <div className="tokenomicInfo rounded">
                      <img
                        className="tokenomicImage"
                        src={tokenomic}
                        alt="tokenomic"
                      />
                    </div>
                  </Box> */}
                </Box>
              </Col>
            </Row>
          </Container>
          <Footer />
          {/* <div className="main"></div> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Detail;
