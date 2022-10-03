import { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { launchpad as launchpadABI } from 'common/abis/launchpad';
import { toCacatUnit } from 'utils/helper/web3helper';
import { abi } from 'common/abis/abi';
import { ethers } from 'ethers';
import { useWeb3 } from '../../common/hooks/useWeb3';

function Buy(props) {
  const { launchpad, gblog } = props;
  const [buyValue, setBuyValue] = useState('0');
  const [buyStatus, setBuyStatus] = useState('connect');
  const [buyLimit, setBuyLimit] = useState(true);
  const [balance, setBalance] = useState('0');
  const [tokenName, setTokenName] = useState('');
  const [decimal, setDecimal] = useState(0);
  const { isConnected } = useWeb3();
  const usdc = {
    // address: '0xbc215584c86151b2e24f5fAb8116923d9f292a11',
    address: launchpad.PoolAddress,
    abi: launchpadABI,
  };

  const init = async () => {
    let getBalance = 0;
    if (window.$web3) {
      const currencyContract = new window.$web3.eth.Contract(
        abi,
        launchpad.ExchangeToken
      );
      const allowance = await currencyContract.methods
        .allowance(window.$account[0], usdc.address)
        .call();
      allowance > 0 ? setBuyStatus('buy') : setBuyStatus('approve');
      getBalance = await currencyContract.methods
        .balanceOf(window.$account[0])
        .call();
    }
    setDecimal(launchpad.ExchangeDecimal);
    setBalance(getBalance.toString());
    setTokenName(launchpad.Currency);
    setBuyLimit(gblog);
  };
  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buyToken = async () => {
    try {
      const lpadContract = new window.$web3.eth.Contract(
        usdc.abi,
        usdc.address
      );
      const BNValue = toCacatUnit(
        +buyValue,
        parseInt(launchpad.ExchangeDecimal)
      );
      console.log(BNValue.toString());
      const purchase = await lpadContract.methods
        .purchase(BNValue)
        .send({ from: window.$account[0] });
      if (purchase) console.log('berhasil beli');
    } catch (e) {
      console.log(e);
    }
  };

  const approve = async () => {
    try {
      const lpadContract = new window.$web3.eth.Contract(
        abi,
        launchpad.ExchangeToken
      );
      const overPowerSwapValue =
        '100002392093029032093209302930923092039209302930293029';
      const approve = await lpadContract.methods
        .approve(usdc.address, overPowerSwapValue)
        .send({ from: window.$account[0] });
      if (approve) setBuyStatus('buy');
    } catch (e) {
      // SWALLLL DISINI
      console.log(e);
    }
  };

  return (
    <div className="countdownBox p-3 mt-3 rounded">
      {buyStatus === 'buy' ? (
        <>
          <p className="mt-0">
            Your Balance
            <br />~ {ethers.utils.formatUnits(balance.toString(), decimal)}{' '}
            {tokenName}
          </p>
          <div className="inputGroup my-0">
            <InputGroup
              type="number"
              min="0"
              step="1"
              max={launchpad.MaxContribution}
            >
              {/* <img
                src={DEFAULT_IMAGE}
                alt="logo"
                style={{ width: '40px', padding: '8px' }}
              /> */}
              <FormControl
                placeholder="amount"
                type="text"
                className="inputField"
                value={buyValue}
                onChange={(e) => {
                  if (
                    typeof Number(e.target.value) === 'number' &&
                    !isNaN(Number(e.target.value)) &&
                    Number(e.target.value) <= launchpad.MaxContribution
                  ) {
                    setBuyValue(e.target.value);
                  }
                }}
              />
              <Button
                className="inputField bg-gradient-color btn-sm text-white rounded m-1 px-4 py-2"
                id="button-addon2"
                onClick={() => {
                  console.log('keclick');
                  setBuyValue(launchpad.MaxContribution);
                }}
              >
                Max
              </Button>
            </InputGroup>
          </div>
          {/* <p className="mt-2">
            You will receive {buyValue ? Number(buyValue).toLocaleString() : 0}{' '}
            {nameOfToken}
          </p> */}
          {buyLimit ? (
            <>
              <Button
                className="inputField mt-2 bg-gradient-color btn-sm text-white rounded px-4 py-2"
                style={{ opacity: '0.5' }}
                id="button-addon2"
              >
                Contribute
              </Button>
            </>
          ) : (
            <>
              <Button
                className="inputField mt-2 bg-gradient-color btn-sm text-white rounded px-4 py-2"
                id="button-addon2"
                onClick={() => buyToken()}
              >
                Contribute
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          {isConnected ? (
            <>
              <p>Click approve to unlock the contribute button</p>
              <Button
                className="inputField mt-2 bg-gradient-color btn-sm text-white rounded px-4 py-2"
                id="button-addon2"
                onClick={() => approve()}
              >
                Approve
              </Button>
            </>
          ) : (
            <>
              <p className="mb-0">
                You must connect first, click connect button on navbar
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Buy;
