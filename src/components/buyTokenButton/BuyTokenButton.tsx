import { Types } from "aptos";
import { useWallet } from "@manahippo/aptos-wallet-adapter";

import Button from "./BuyTokenButton.style";

const admin =
  "0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902";

const BuyTokenButton = (props: any) => {
  const { signAndSubmitTransaction } = useWallet();
  const buyToken = async (presaleAddress: any, aptosAmount: any) => {
    try {
      const txOptions = {
        max_gas_amount: "200000",
      };
      const payload: Types.TransactionPayload = {
        function: `${admin}::token_sale_v3::user_deposit`,
        type_arguments: ["0x1::aptos_coin::AptosCoin"],
        arguments: [presaleAddress, aptosAmount],
      };
      const transactionRes = await signAndSubmitTransaction(payload, txOptions);
      // await aptosClient.waitForTransaction(transactionRes?.hash || '');
      if (transactionRes) {
        console.log(transactionRes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    buyToken(props.presaleAddress, props.aptosAmount);
  };

  return <Button onClick={handleClick}>BUY</Button>;
};

export default BuyTokenButton;
