import { AptosClient } from "aptos";

const NODE_URL = "https://fullnode.testnet.aptoslabs.com";
const admin =
  "0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902";

const client = new AptosClient(NODE_URL);

export const getPresaleInfo = async (presaleAddress) => {
  try {
    let accountResources = await client.getAccountResources(presaleAddress);
    let accountResource = accountResources.find(
      (r) => r.type === `${admin}::token_sale_v3::PresaleInfo`
    );
    return accountResource.data;
  } catch (err) {
    console.log(err);
  }
};

export const buyToken = async (presaleAddress, walletAddress, aptosAmount) => {
  try {
    let newrawTxn = await client.generateTransaction(walletAddress, {
      function: `${admin}::token_sale_v3::user_deposit,
    type_arguments: ["0x1::aptos_coin::AptosCoin"]`,
      arguments: [
        presaleAddress,
        aptosAmount, //0.001 aptos aoptos 8 decimal // mooncoin 6 decimals
      ],
    });
    const bcsTxn = await client.signTransaction(alice, newrawTxn);
    const pendingTxn = await client.submitTransaction(bcsTxn);
    await client.waitForTransaction(pendingTxn.hash, { checkSuccess: true });
  } catch (err) {
    console.log(err);
  }
};
