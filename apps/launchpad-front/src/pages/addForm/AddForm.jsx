import React, { useState, useEffect } from 'react';
import { Box, Button, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './addForm.css';
import Page1 from '../../components/page1/Page1';
import Page2 from '../../components/page2/Page2';
import Page3 from '../../components/page3/Page3';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getChainsList } from './storage/addFormActions';
import { POST } from '../../utils/network/baseRequest.utils';
import api from '../../utils/network/baseUrl.utils';
// import { HeaderAuth } from "../../utils/network/headers.utils";

function AddForm(props) {
  const [value, setValue] = React.useState('1');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const chainsList = useSelector((state) => state.addFormReducers.chains);
  const [newLaunchpadData, setNewLaunchpadData] = useState({
    tokenChain: '1',
    tokenAddress: '',
    tokenName: '',
    tokenSymbol: '',
    tokenTotalSupply: '',
    tokenSupplyForPresale: '',
    tokenSupplyForLiquidity: '',
    tokenDecimal: 0,
    tokenLogo: null,
    tokenDescription: '',
    tokenCurrency: 'WBNB',
    tokenSaleType: 'Public',
    tokenSoftcap: '',
    tokenHardcap: '',
    tokenMinimumBuy: '',
    tokenMaximumBuy: '',
    tokenListing: 'pancakeswap',
    tokenPriceIDO: '',
    tokenPriceLaunch: '',
    tokenWebsite: '',
    tokenWhitepaper: '',
    tokenFacebook: '',
    tokenTwitter: '',
    tokenTelegram: '',
    tokenDiscord: '',
  });

  const updateInput = (name, value) => {
    setNewLaunchpadData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(getChainsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // For checking whether required field is not empty
  useEffect(() => {
    let flag = true;
    for (const prop in newLaunchpadData) {
      if (
        prop !== 'tokenFacebook' &&
        prop !== 'tokenTwitter' &&
        prop !== 'tokenTelegram' &&
        prop !== 'tokenDiscord' &&
        !newLaunchpadData[prop]
      ) {
        flag = false;
      }
    }

    if (flag) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [newLaunchpadData]);

  const sendForm = async (isLoading = false, data = {}) => {
    const exchangeTokens = {
      WBNB: {
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      },
      BUSD: {
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      },
    };

    try {
      const {
        tokenChain,
        tokenAddress,
        tokenName,
        tokenSymbol,
        tokenTotalSupply,
        tokenSupplyForPresale,
        tokenSupplyForLiquidity,
        tokenDecimal,
        tokenLogo,
        tokenDescription,
        tokenCurrency,
        tokenSaleType,
        tokenSoftcap,
        tokenHardcap,
        tokenMinimumBuy,
        tokenMaximumBuy,
        tokenListing,
        tokenPriceIDO,
        tokenPriceLaunch,
        tokenWebsite,
        tokenWhitepaper,
        tokenFacebook,
        tokenTwitter,
        tokenTelegram,
        tokenDiscord,
      } = newLaunchpadData;

      let formData = new FormData();

      formData.append('files', tokenLogo);
      formData.append(
        'fileInfo',
        JSON.stringify({
          path: tokenLogo.path,
          name: tokenLogo.name,
          size: tokenLogo.size,
          type: tokenLogo.type,
        })
      );

      const upload = await POST(api.BASE_URL + api.ENDPOINT.upload, formData);

      const createTokenInfo = await POST(
        api.BASE_URL + api.ENDPOINT.tokenInfo,
        {
          data: {
            TokenAddress: tokenAddress,
            TokenSymbol: tokenSymbol,
            TokenDecimal: Number(tokenDecimal),
            TokenTotalSupply: tokenTotalSupply,
            TokenForPresale: tokenSupplyForPresale,
            TokenForLiquidity: tokenSupplyForLiquidity,
            TokenName: tokenName,
            TokenDescription: tokenDescription,
            TokenLogo: upload.data[0].id,
            Link: {
              Website: tokenWebsite ? tokenWebsite : '',
              Whitepaper: tokenWhitepaper ? tokenWhitepaper : '',
              Twitter: tokenTwitter ? tokenTwitter : '',
              Facebook: tokenFacebook ? tokenFacebook : '',
              Telegram: tokenTelegram ? tokenTelegram : '',
              Discord: tokenDiscord ? tokenDiscord : '',
            },
            chain: tokenChain,
          },
        }
      );

      const createLaunchpad = await POST(
        api.BASE_URL + api.ENDPOINT.launchpad,
        {
          data: {
            Softcap: tokenSoftcap,
            Hardcap: tokenHardcap,
            MinContribution: tokenMinimumBuy,
            MaxContribution: tokenMaximumBuy,
            Currency: tokenCurrency,
            Listing: tokenListing,
            PriceIDO: tokenPriceIDO,
            PriceLaunch: tokenPriceLaunch,
            ExchangeToken: exchangeTokens[tokenCurrency].address,
            SaleType: tokenSaleType,
            StatusType: ['Verify', 'OnSale'],
            token: createTokenInfo.data.data.id,
          },
        }
      );
      if (createLaunchpad) {
        console.log('Creating Launchpad');
      }
      navigate('/');
    } catch (error) {
      console.log(error, '@170');
    }
  };

  return (
    <>
      <Container>
        <Row>
          <div className="col-12">
            <Button
              onClick={() => navigate('/')}
              sx={{
                background:
                  'linear-gradient(96.51deg, var(--primary-rgb) 2.96%, var(--secondary-rgb) 55.12%) 0% 0% repeat scroll rgba(0, 0, 0, 0)',
                color: 'white',
                cursor: 'pointer',
                m: 2,
                '&:hover': {
                  background:
                    'linear-gradient(96.51deg, var(--primary-rgb) 2.96%, var(--secondary-rgb) 55.12%) 0% 0% repeat scroll rgba(0, 0, 0, 0)',
                  color: 'white',
                },
              }}
            >
              Back to Home
            </Button>
            <Box
              className="p-5 rounded"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(0,0,0,0.2)',
              }}
            >
              <TabContext value={value}>
                <Box>
                  <TabList
                    aria-label="lab API tabs example"
                    className="tabParent"
                  >
                    <Tab
                      label="1. Token Info"
                      value="1"
                      className="tabNum"
                      disabled
                    />
                    <Tab
                      label="2. Presale Info"
                      value="2"
                      className="tabNum"
                      disabled
                    />
                    <Tab
                      label="3. Social Media"
                      value="3"
                      className="tabNum"
                      disabled
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" className="p-0">
                  <Page1
                    updateInput={updateInput}
                    data={newLaunchpadData}
                    chainsList={chainsList}
                  />
                </TabPanel>
                <TabPanel value="2" className="p-0">
                  <Page2 updateInput={updateInput} data={newLaunchpadData} />
                </TabPanel>
                <TabPanel value="3" className="p-0">
                  <Page3 updateInput={updateInput} data={newLaunchpadData} />
                </TabPanel>
              </TabContext>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
                className="mt-5"
              >
                <button
                  onClick={() => {
                    if (value >= 2) {
                      setValue((parseInt(value) - 1).toString());
                    }
                  }}
                  className="bg-secondary rounded"
                  style={{
                    padding: '12px 28px',
                    border: 'none',
                    color: 'white',
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    margin: '0 0 0 1em',
                  }}
                >
                  Back
                </button>
                {value === '3' ? (
                  valid ? (
                    <button
                      onClick={() => {
                        sendForm(false, newLaunchpadData);
                        // history.push("/");
                      }}
                      className="rounded"
                      style={{
                        background:
                          'linear-gradient(255.52deg, #0294AB -173.55%, #0294AB 71.9%, rgba(60, 89, 190, 0.7) 117.57%)',
                        padding: '12px 28px',
                        border: 'none',
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        margin: '0 0 0 1em',
                      }}
                    >
                      Send
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (value <= 2) {
                          setValue((parseInt(value) + 1).toString());
                        }
                      }}
                      className="rounded"
                      style={{
                        background:
                          'linear-gradient(255.52deg, #0294AB -173.55%, #0294AB 71.9%, rgba(60, 89, 190, 0.7) 117.57%)',
                        padding: '12px 28px',
                        border: 'none',
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        margin: '0 0 0 1em',
                        opacity: 0.5,
                      }}
                      disabled
                    >
                      Send
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => {
                      if (value <= 2) {
                        setValue((parseInt(value) + 1).toString());
                      }
                    }}
                    className="rounded"
                    style={{
                      background:
                        'linear-gradient(255.52deg, #0294AB -173.55%, #0294AB 71.9%, rgba(60, 89, 190, 0.7) 117.57%)',
                      padding: '12px 28px',
                      border: 'none',
                      color: 'white',
                      fontFamily: 'Montserrat',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      margin: '0 0 0 1em',
                    }}
                  >
                    Continue
                  </button>
                )}
              </div>
            </Box>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default AddForm;
