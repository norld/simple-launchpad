/* eslint-disable no-dupe-keys */
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Web3Modal from 'web3modal';
import dooit from 'assets/logo.png';
import { Link } from 'react-router-dom';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';

const ChainId = 56;
let provider;
const providerOptions = {
  injected: {
    package: null,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: 'https://rpc-bsc-main-01.3tokendigital.com/rpc',
        // eslint-disable-next-line no-dupe-keys
        56: 'https://bsc-dataseed1.ninicoin.io',
        56: 'https://bsc-dataseed1.defibit.io',
        // 97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        // 97: "https://data-seed-prebsc-2-s2.binance.org:8545/",
        // 97: "https://data-seed-prebsc-1-s3.binance.org:8545/",
        // 97: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      },
      chainId: 56,
      network: 'binance',
      bridge: 'https://bridge.walletconnect.org',
      qrcodeModalOptions: {
        mobileLinks: ['trust', 'metamusk', 'neftipedia'],
      },
    },
  },
};

function Navs() {
  const [isConnected, setIsConnected] = useState(false);
  const [isDisconnected, setIsDisconnected] = useState(true);

  let web3Modal;
  if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
      providerOptions,
    });
  }

  const init = async () => {
    if (web3Modal.cachedProvider) connetWallet();
  };

  useEffect(() => {
    init();
    // console.log('init jalan lo');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    window.$provider = null;
    window.$web3 = null;
    window.$account = null;
    setIsDisconnected(true);
    setIsConnected(false);
  };

  const connetWallet = async () => {
    try {
      provider = await web3Modal.connect();
      window.$provider = provider;
      window.$web3 = new Web3(provider);
      window.$account = await window.$web3.eth.getAccounts();
      setIsDisconnected(false);
      setIsConnected(true);
      // window.location.reload(false);
    } catch (e) {
      throw e;
    }

    if (window.$provider) {
      window.$provider.on('accountsChanged', (accounts) => {
        console.log(accounts);
        window.$account = accounts;
      });
      window.$provider.on('chainChanged', (chainId) => {
        if (chainId !== ChainId) {
          console.log('wrong network');
        }
      });
      window.$provider.on('connect', (info) => {
        console.log('@connected', info);
      });
      window.$provider.on('disconnect', (error) => {
        console.log('disconnect', error);
        disconnectWallet();
      });
    }
  };

  return (
    <Navbar
      className="py-4"
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="dark"
    >
      <Container>
        <Link className="navbar-brand" to={'/'}>
          <img src={dooit} alt="dooit title" style={{ height: '35px' }} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Pools 🔥</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link> */}
          </Nav>
          <Nav>
            <Button
              onClick={connetWallet}
              style={{
                background:
                  'rgba(0, 0, 0, 0) linear-gradient(96.51deg, var(--primary-rgb) 2.96%, var(--secondary-rgb) 55.12%) repeat scroll 0% 0%',
                border: 'none',
                boxShadow: 'none',
              }}
              className={isConnected ? 'd-none' : 'd-inline'}
            >
              Connect Wallet
            </Button>
            <Button
              onClick={disconnectWallet}
              style={{
                background:
                  'rgba(0, 0, 0, 0) linear-gradient(96.51deg, var(--primary-rgb) 2.96%, var(--secondary-rgb) 55.12%) repeat scroll 0% 0%',
                border: 'none',
                boxShadow: 'none',
              }}
              className={isDisconnected ? 'd-none' : 'd-inline'}
            >
              Disconnect
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
