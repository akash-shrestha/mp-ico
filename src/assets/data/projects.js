// partial data of all projects, for showing in the list of projects
import discord from "@assets/images/icons/discord.svg";
import medium from "@assets/images/icons/medium.svg";
import telegram from "@assets/images/icons/telegram.svg";
import twitter from "@assets/images/icons/twitter.svg";
import projectThumb from "@assets/images/project/explore-image.png";
import coinIcon from "@assets/images/project/aptos.svg";

export default {
  data: [
    {
      projectStatus: "Upcoming",
      projects: [
        {
          thumb: projectThumb,
          title: "Galaxy Wars (Test Project)",
          price: "0.59 APT",
          saleEnd: "08",
          coinIcon: coinIcon,
          launchedDate: "08",
          totalRised: "100,000",
          progress: "100%",
          projectDetails: [
            {
              title: "Min allocation",
              text: "2.25 APT",
            },
            {
              title: "Max allocation",
              text: "1000.00 APT",
            },
            {
              title: "Targeted raise",
              text: "50,00,000 APT",
            },
            {
              title: "Access type",
              text: "Public",
            },
          ],
          socialLinks: [
            {
              icon: medium,
              url: "https://movepad.medium.com/",
            },
            {
              icon: twitter,
              url: "https://twitter.com/movepadofficial",
            },
            {
              icon: discord,
              url: "https://discord.gg/ekZtUDWgyK",
            },
            {
              icon: telegram,
              url: "https://t.me/movepadofficial",
            },
          ],
        },
      ],
    },
    {
      projectStatus: "Live",
      projects: [],
    },
    {
      projectStatus: "Ended",
      projects: [],
    },
  ],
};
