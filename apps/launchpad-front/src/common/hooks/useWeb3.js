/* eslint-disable no-dupe-keys */
import React, { useState, useRef, useEffect } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';

// export const Web3Context = createContext(null);

const ChainId = 56;
let provider;

let web3Modal;
const providerOptions = {
  injected: {
    package: null,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: 'https://bsc-dataseed1.ninicoin.io',
        56: 'https://bsc-dataseed1.defibit.io',
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
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
  });
}
export const useWeb3 = () => {
  const refConnect = useRef(null);
  const refDisconnect = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isDisconnected, setIsDisconnected] = useState(true);
  const [account, setAccount] = useState('');

  const init = async () => {
    if (web3Modal.cachedProvider) connetWallet();
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disconnectWallet = async () => {
    try {
      console.log('disconnectWallet');
      await web3Modal.clearCachedProvider();
      window.$provider = null;
      window.$web3 = null;
      window.$account = null;
      setIsDisconnected(true);
      setIsConnected(false);
    } catch (e) {
      console.log(e);
    }
    console.log('hook isConnected', isConnected);
    console.log('hook isDisconnected', isDisconnected);
  };
  const connetWallet = async () => {
    try {
      console.log('ahh ahh');
      provider = await web3Modal.connect();
      window.$provider = provider;
      window.$web3 = new Web3(provider);
      window.$account = await window.$web3.eth.getAccounts();
      console.log(window.$account[0], 'window.$account[0]');
      setAccount(window.$account[0]);
      setIsDisconnected(false);
      setIsConnected(true);
      // window.location.reload(false);
    } catch (e) {
      console.log(e);
    }

    if (window.$provider) {
      window.$provider.on('accountsChanged', (accounts) => {
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
    console.log('hook isConnected', isConnected);
    console.log('hook isDisconnected', isDisconnected);
  };

  return {
    isConnected,
    disconnectWallet,
    isDisconnected,
    connetWallet,
    web3Modal,
    account,
    refConnect,
    refDisconnect,
  };
};
