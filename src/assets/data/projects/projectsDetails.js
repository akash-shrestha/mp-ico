// data in detail for all projects, which will later be feed from blockchain and backend. Data for a specific project can be retrieved as per need
import discord from "@assets/images/icons/discord.svg";
import medium from "@assets/images/icons/medium.svg";
import telegram from "@assets/images/icons/telegram.svg";
import twitter from "@assets/images/icons/twitter.svg";
import coinIcon from "@assets/images/project/aptos.svg";
import projectThumb from "@assets/images/project/explore-image.png";

export const projectsData = [
  {
    id: "1", // unique identifier for a project in database or backend
    title: "The New Lands",
    price: "1 MOON = 2 APT", // calculate; amount_to_be_raised/token_to_be_sold //calculated as tokenPrice
    access: "Private",
    name: "Moon Coin",
    symbol: "MOON",
    decimals: "8",
    address:
      "https://explorer.aptoslabs.com/account/0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902/",
    totalSupply: "",
    launchedDate: "2022", // new
    thumb: projectThumb, // new
    coinIcon: coinIcon, // new
    presale_id:
      "0x17ef3271aae0165c473c96936906194dcc07501be0d707a475a6131ac736f4ed", // unique id for every presale or project in blockchain. It will be linked with project id or id in backend
    aptos_reserve: "0", // aptos; amount of aptos collected so far by selling tokens
    coin_reserve: "100000000", // token; decreases as user buys; total number coin currently available for sale, not total supply
    is_whitelist: true,
    min_spend_per_user: "10000000", // aptos; min amount of aptos that user should spend to participate in the sale
    sale_status: "2", // 1 upcoming, 2 for active, 3 for reaching hardcap, 4 aborted
    signer_cap: {
      account:
        "0x17ef3271aae0165c473c96936906194dcc07501be0d707a475a6131ac736f4ed",
    },
    softcap: "100000000", // min amount to be raised target, if its reached we can consider success even if hardcap is not reached
    token_distribution_ts: "1669356041", // timestamp; date when token will be distributed
    token_to_be_sold: "100000000", // token; fixed; total amount for sale
    whitelist: [
      "0xe19d5f65ad27a18207c719c1ea02983167fc30b512fb78098250027df406dd63",
    ],
    icon: "projectIcon.jpg",
    //totalRaise: "75,999.70 BUSD",
    amount_raised: "0",
    totalRaisePercent: "0%", // calculate; amount_raised/amount_to_be_raised*100
    // allocation: "50000000 APT Max"
    max_spend_per_user: "50000000",
    // salesStartsIn: "1641129053000",
    // salesEndsIn: "1664716253000",
    sale_end_ts: "1669355141",
    sale_start_ts: "1669353941",
    // targetedRaise: "200000000 BUSD"
    amount_to_be_raised: "500000000", // aptos; max amount to be raised, or hardcap
    progressPercent: "0%", // calculate
    participated: "0", // number of people who bought token
    participants: "0/1", // calculate; number of people who bought/total number of people in whitelist
    socialData: [
      { url: "https://www.medium.com/", icon: medium },
      { url: "https://www.discord.com/", icon: discord },
      { url: "https://www.telegram.com/", icon: telegram },
      { url: "https://www.twitter.com/", icon: twitter },
    ],
    summary: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original`,
    tokenData: [
      {
        title: "The New Lands",
        tokenInfo: [
          {
            title: "Token Distribution",
            text: "100000000",
          },
          {
            title: "Min. Allocation",
            text: "10000000 APT", // min_spend_per_user
          },
          {
            title: "Max. Allocation",
            text: "50000000 APT", // max_spend_per_user
          },
          {
            title: "Token Price",
            text: "1 MOON = 2 APT", // calculate
          },
          {
            title: "Access type",
            text: "Private", // since pre sale is whitelisted
          },
        ],
      },
      {
        title: "Token Info",
        tokenInfo: [
          {
            title: "Token Name",
            text: "Moon Coin",
          },
          {
            title: "Token Symbol",
            text: "MOON",
          },
          {
            title: "Decimals", // ??
            text: "8",
          },
          {
            title: "Address",
            text: "0x22d40020282f9c8", // address of token contract, will be provided later
          },
          {
            title: "Total Supply", // later comes from backend, from form data, not from blockchain
            text: "3,333,334.00 MOON",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "The New Lands Returns",
    price: "1 MOON = 2 APT", // calculate; amount_to_be_raised/token_to_be_sold
    access: "Private",
    name: "Moon Coin",
    symbol: "MOON",
    decimals: "8",
    address:
      "https://explorer.aptoslabs.com/account/0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902/",
    totalSupply: "",
    launchedDate: "2022", // new
    thumb: projectThumb, // new
    coinIcon: coinIcon, // new
    presale_id:
      "0x8ddda088fe52e528a1169f943e4628435f6b1a279b56a7de94a48eea2ad13376",
    icon: "projectIcon.jpg",
    totalRaisePercent: "20%",
    allocation: "1000 BUSD Max",
    coinIcon: "coinIcon.png",
    targetedRaise: "500,000 BUSD",
    progressPercent: "25%",
    participants: "2222/10000",
    socialData: [
      { url: "https://www.medium.com/", icon: medium },
      { url: "https://www.discord.com/", icon: discord },
      { url: "https://www.telegram.com/", icon: telegram },
      { url: "https://www.twitter.com/", icon: twitter },
    ],
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem`,
  },
  {
    id: "3",
    title: "The New Lands Returns Again",
    price: "1 MOON = 2 APT", // calculate; amount_to_be_raised/token_to_be_sold
    access: "Private",
    name: "Moon Coin",
    symbol: "MOON",
    decimals: "8",
    address:
      "https://explorer.aptoslabs.com/account/0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902/",
    totalSupply: "",
    launchedDate: "2022", // new
    thumb: projectThumb, // new
    coinIcon: coinIcon, // new
    presale_id:
      "0x6d09d99fd1609c42334a4250035d5dcae7bd4b38f3ea4a7a072eeee51363c9c6",
    icon: "projectIcon.jpg",
    totalRaise: "99,999.70 BUSD",
    totalRaisePercent: "20%",
    allocation: "1000 BUSD Max",
    coinIcon: "coinIcon.png",
    salesStartsIn: "1672665053000",
    salesEndsIn: "1677762653000",
    targetedRaise: "500,000 BUSD",
    progressPercent: "25%",
    participants: "2222/10000",
    socialData: [
      { url: "https://www.medium.com/", icon: medium },
      { url: "https://www.discord.com/", icon: discord },
      { url: "https://www.telegram.com/", icon: telegram },
      { url: "https://www.twitter.com/", icon: twitter },
    ],
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem`,
  },
  {
    id: "4",
    title: "The New Lands Returns Again and Again",
    price: "1 MOON = 2 APT", // calculate; amount_to_be_raised/token_to_be_sold
    access: "Private",
    name: "Moon Coin",
    symbol: "MOON",
    decimals: "8",
    address:
      "https://explorer.aptoslabs.com/account/0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902/",
    totalSupply: "",
    launchedDate: "2022", // new
    thumb: projectThumb, // new
    coinIcon: coinIcon, // new
    presale_id:
      "0x37d43a962d6fa390cb0edaec5cd284dc990f28ab79767e37a9ca034b1dffc2e1",
    icon: "projectIcon.jpg",
    totalRaise: "99,999.70 BUSD",
    totalRaisePercent: "20%",
    allocation: "1000 BUSD Max",
    coinIcon: "coinIcon.png",
    salesStartsIn: "1672665053000",
    salesEndsIn: "1677762653000",
    targetedRaise: "500,000 BUSD",
    progressPercent: "25%",
    participants: "2222/10000",
    socialData: [
      { url: "https://www.medium.com/", icon: medium },
      { url: "https://www.discord.com/", icon: discord },
      { url: "https://www.telegram.com/", icon: telegram },
      { url: "https://www.twitter.com/", icon: twitter },
    ],
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem`,
  },
  {
    id: "5",
    title: "The New Lands Returns 5",
    price: "1 MOON = 2 APT", // calculate; amount_to_be_raised/token_to_be_sold
    access: "Private",
    name: "Moon Coin",
    symbol: "MOON",
    decimals: "8",
    address:
      "https://explorer.aptoslabs.com/account/0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902/",
    totalSupply: "",
    launchedDate: "2022", // new
    thumb: projectThumb, // new
    coinIcon: coinIcon, // new
    presale_id:
      "0x6660ac8f6bad62301e1d2ab48a3e6b47999fd2427708d45c165101020751c70f",
    icon: "projectIcon.jpg",
    totalRaise: "99,999.70 BUSD",
    totalRaisePercent: "20%",
    allocation: "1000 BUSD Max",
    coinIcon: "coinIcon.png",
    salesStartsIn: "1672665053000",
    salesEndsIn: "1677762653000",
    targetedRaise: "500,000 BUSD",
    progressPercent: "25%",
    participants: "2222/10000",
    socialData: [
      { url: "https://www.medium.com/", icon: medium },
      { url: "https://www.discord.com/", icon: discord },
      { url: "https://www.telegram.com/", icon: telegram },
      { url: "https://www.twitter.com/", icon: twitter },
    ],
    token_details:
      "0x942e8571ebf35ee3619d5e63b1c99becbc08b0e99181a6c5a4de0b05da32b902::moon_coin::MoonCoin",
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit es Lorem ipsum dolor Lorem`,
  },
];

export default projectsData;
