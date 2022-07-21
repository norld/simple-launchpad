import { React, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { toSmallUnit } from '../../utils/helper/web3helper';
import { abi } from '../../common/abis/abi';

function ProgressBarMenu(props) {
  const {item} = props
  const [currentPurchase, setCurrentPurchase] = useState("0")

  const setPrice = async () => {
    try {
      if (item.attributes.PoolAddress) {
        const currencyContract = new window.$web3.eth.Contract(
          abi,
          item.attributes.ExchangeToken
        );
        if (currencyContract) {
          const _totalRaise = await currencyContract.methods
            .balanceOf(item.attributes.PoolAddress)
            .call();
          
          const currentPool = toSmallUnit(
            Number(_totalRaise),
            Number(item.attributes.ExchangeDecimal)
          );
          setCurrentPurchase(Number(item.attributes.Hardcap) - Number(currentPool));
        }
      }
    } catch (error) {
      setCurrentPurchase(0);
    }
  }
  useEffect(() => {
    setPrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // });

  return (
    <div className="progressInfo pt-3">
      <div>
        <p className="progressPercentage">
          Progress:{' '}
          {(
            ((Number(item.attributes.Hardcap) - Number(currentPurchase)) /
              Number(item.attributes.Hardcap)) *
            100
          ).toFixed('2')}
          %
        </p>
      </div>
      <div className="">
        <ProgressBar
          variant="success"
          now={
            ((Number(item.attributes.Hardcap) - Number(currentPurchase)) /
              Number(item.attributes.Hardcap)) *
            100
          }
        />
      </div>
      <div className="currentProgress">
        <div>
          {(Number(item.attributes.Hardcap) - Number(currentPurchase)).toLocaleString()}{' '}
          / {Number(item.attributes.Hardcap).toLocaleString()}{' '}
          {item.attributes.Currency}
        </div>
      </div>
    </div>
  );
}

export default ProgressBarMenu;
