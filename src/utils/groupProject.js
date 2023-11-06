import { getPresaleInfo } from "src/lib/aptosLoader";
import { getProjectDetails } from "src/lib/projectLoader";

export const getProjectGroup = async (projectsDetail) => {
  const projectGroup = [
    {
      projectStatus: "Upcoming",
      projects: [
        // {
        //   thumb: projectThumb,
        //   title: "Galaxy Wars (Test Project)",
        //   price: "0.59 APT",
        //   saleEnd: "08",
        //   coinIcon: coinIcon,
        //   launchedDate: "08",
        //   totalRised: "100,000",
        //   progress: "100%",
        //   projectDetails: [
        //     {
        //       title: "Min allocation",
        //       text: "2.25 APT",
        //     },
        //     {
        //       title: "Max allocation",
        //       text: "1000.00 APT",
        //     },
        //     {
        //       title: "Targeted raise",
        //       text: "50,00,000 APT",
        //     },
        //     {
        //       title: "Access type",
        //       text: "Public",
        //     },
        //   ],
        //   socialLinks: [
        //     {
        //       icon: medium,
        //       url: "https://movepad.medium.com/",
        //     },
        //     {
        //       icon: twitter,
        //       url: "https://twitter.com/movepadofficial",
        //     },
        //     {
        //       icon: discord,
        //       url: "https://discord.gg/ekZtUDWgyK",
        //     },
        //     {
        //       icon: telegram,
        //       url: "https://t.me/movepadofficial",
        //     },
        //   ],
        // },
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
  ];

  await Promise.all(
    projectsDetail.map(async (project) => {
      const presaleId = project.presale_id;
      const projectChainData = await getPresaleInfo(presaleId);
      const mergedProjectData = { ...project, ...projectChainData };
      const projectDetails = getProjectDetails(mergedProjectData);
      const mergedProjectDetails = { ...mergedProjectData, ...projectDetails };
      if (mergedProjectDetails.sale_status === "1") {
        projectGroup[0].projects.push(mergedProjectDetails);
        return;
      }
      if (mergedProjectDetails.sale_status === "2") {
        projectGroup[1].projects.push(mergedProjectDetails);
        return;
      }
      if (mergedProjectDetails.sale_status === "3") {
        projectGroup[2].projects.push(mergedProjectDetails);
      }
    })
  );

  return projectGroup;
};
