import checkIcon from "@assets/images/kycimg/RMcheckicon.svg";
import minusIcon from "@assets/images/kycimg/munies.svg";

export default {
  data: [
    {
      year: "2022",
      items: [
        {
          title: "Nov 2022",
          isLunched: true,
          checkList: [
            {
              icon: checkIcon,
              text: "Platform v1 development",
            },
            {
              icon: minusIcon,
              text: "Aptos Mainnet platform launch",
            },
            {
              icon: minusIcon,
              text: "Community growth",
            },
            {
              icon: minusIcon,
              text: "MPAD whitelist competition launch",
            },
            {
              icon: minusIcon,
              text: "Partnerships within the ecosystem",
            },
          ],
        },
        {
          title: "Dec 2022",
          isLunched: false,
          checkList: [
            {
              icon: minusIcon,
              text: "Incubation program launch",
            },
            {
              icon: minusIcon,
              text: "MPAD public sale",
            },
            {
              icon: minusIcon,
              text: "DEFI Launches on APTOS",
            },
            {
              icon: minusIcon,
              text: "Sui platform development",
            },
          ],
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title: "Q1 2023",
          isLunched: false,
          checkList: [
            {
              icon: minusIcon,
              text: "MoveLock platform launch",
            },
            {
              icon: minusIcon,
              text: "v2 - Dynamic IDO platform",
            },
            {
              icon: minusIcon,
              text: "Contracts Audit support",
            },
            {
              icon: minusIcon,
              text: "Staking",
            },
            {
              icon: minusIcon,
              text: "Liquidity mining program",
            },
            {
              icon: minusIcon,
              text: "Launch Tiers",
            },
          ],
        },
        {
          title: "Q2 2023",
          isLunched: false,
          checkList: [
            {
              icon: minusIcon,
              text: "Incubator program for Aptos & Sui",
            },
            {
              icon: minusIcon,
              text: "Dynamic Sale mechanisms",
            },
            {
              icon: minusIcon,
              text: "Gaming mechanisms",
            },
          ],
        },
        {
          title: "Q3 2023",
          isLunched: false,
          checkList: [
            {
              icon: minusIcon,
              text: "Auction system integration",
            },
            {
              icon: minusIcon,
              text: "Mobile app for iOS and Android",
            },
           
          ],
        },
      ],
    },
  ],
};
