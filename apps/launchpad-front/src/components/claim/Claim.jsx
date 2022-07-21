import React, { useState, useEffect } from "react";
import claimLogo from "../../assets/card-receive.svg";
import { launchpad as launchpadABI } from "../../common/abis/launchpad";

function ClaimButton(props) {
  const [isClaimOpen, setIsClaimOpen] = useState(false);
  const [claimAmount, setClaimAmount] = useState(0);
  const { item } = props;
  const usdc = { address: item.PoolAddress, abi: launchpadABI};
  const lpadContract = new window.$web3.eth.Contract(usdc.address, usdc.abi);
  const init = async () => {
    const getClaimOpen = await lpadContract.methods.getClaimOpen().call();
    const claimableAmount = await lpadContract.methods.earned({ address: window.$account[0] }).call();
    setIsClaimOpen(getClaimOpen);
    setClaimAmount(claimableAmount);
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const claimRewards = async () => {
    const claimRewards = await lpadContract.methods.claimRewards().send({from: window.$account[0]});
    if (claimRewards) console.log('@claimRewards', claimRewards);
  };
  return (
    <div
      style={
        isClaimOpen
          ? {
              background:
                'linear-gradient(255.52deg, #0294AB -173.55%, #0294AB 71.9%, rgba(60, 89, 190, 0.7) 117.57%)',
              opacity: 1,
            }
          : {
              background:
                'linear-gradient(255.52deg, #0294AB -173.55%, #0294AB 71.9%, rgba(60, 89, 190, 0.7) 117.57%)',
              opacity: 0.5,
            }
      }
      className="rounded d-flex justify-content-center py-3 my-3 align-items-center"
    >
      <>
        <img src={claimLogo} alt="claimLogo" />
        <span className="text-white h6 mb-0" onClick={claimRewards}>
          {' '}
          Claim {claimAmount} {item.token.data.attributes.TokenName}
        </span>
      </>
    </div>
  );
}

export default ClaimButton;
