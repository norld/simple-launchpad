/* eslint-disable no-dupe-keys */
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Web3Modal from 'web3modal';
import dooit from 'assets/logo.png';
import { Link } from 'react-router-dom';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import { useWeb3 } from '../../common/hooks/useWeb3';

function Navs({ web3Func }) {
  const {
    connetWallet,
    disconnectWallet,
    isConnected,
    isDisconnected,
    web3Modal,
    refConnect,
    refDisconnect,
  } = web3Func;
  console.log('nav isConnected', isConnected);
  console.log('nav isDisconnected', isDisconnected);
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
              ref={refConnect}
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
              ref={refDisconnect}
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
