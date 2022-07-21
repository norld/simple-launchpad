/* eslint-disable no-dupe-keys */
import React, { useEffect, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const ErrMsg = withReactContent(Swal);

export const Web3Context = React.createContext(null);

let web3Modal;

const providerOptions = {
  injected: {
    package: null,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: 'https://rpc-bsc-main-01.3tokendigital.com/rpc',
        56: 'https://bsc-dataseed1.ninicoin.io',
        56: 'https://bsc-dataseed1.defibit.io',
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        97: 'https://data-seed-prebsc-2-s2.binance.org:8545/',
        97: 'https://data-seed-prebsc-1-s3.binance.org:8545/',
        97: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
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

if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    theme: {
      background: 'rgb(39, 49, 56)',
      main: 'rgb(199, 199, 199)',
      secondary: 'rgb(136, 136, 136)',
      border: 'rgba(195, 195, 195, 0.14)',
      hover: 'rgb(16, 26, 32)',
    },
  });
}

export const Web3Provider = ({ children }) => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const [isConnected, setIsConnected] = React.useState(false);
  const [isDisconnected, setIsDisconnected] = React.useState(false);
  const [provider, setProvider] = React.useState(null);
  const [address, setAddress] = React.useState('');

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

  const values = useMemo(
    () => ({
      isConnected,
      active,
      account,
      library,
      connector,
      address,
    }),
    [account, address]
  );

  return <Web3Context.Provider value={values}>{children}</Web3Context.Provider>;
};

export default function useWeb3() {
  const context = React.useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 hook must be with a useWeb3Provider');
  }
  return context;
}
