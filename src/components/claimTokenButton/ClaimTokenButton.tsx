import { Types } from "aptos";
import { useWallet } from "@manahippo/aptos-wallet-adapter";

import Button from "./ClaimTokenButton.style";

const admin =
  "0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902";

const ClaimTokenButton = (props: any) => {
  const { signAndSubmitTransaction } = useWallet();

  const claimToken = async (presaleAddress: any) => {
    let type_argument =
      "0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902::moon_coin::MoonCoin";
    try {
      const claimPayLoad: Types.TransactionPayload = {
        function: `${admin}::token_sale_v3::claim_token`,
        type_arguments: [type_argument],
        arguments: [presaleAddress],
      };

      const transactionRes = await signAndSubmitTransaction(claimPayLoad);
      // await aptosClient.waitForTransaction(transactionRes?.hash || '');
      if (transactionRes) {
        console.log(transactionRes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    claimToken(props.presaleAddress);
  };

  return <Button onClick={handleClick}>CLAIM</Button>;
};

export default ClaimTokenButton;
