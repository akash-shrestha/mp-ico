import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";

import nextArrowIcon from "@assets/images/icons/next-arrow.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectItemsStyleWrapper from "./ProjectItems.style";
import projectData from "@assets/data/projects";
import { projectsData } from "@assets/data/projects/projectsDetails.js";
import { getProjectGroup } from "../../../../utils/groupProject";
import coinIcon1 from "@assets/images/project/aptos.svg";
import coinIcon2 from "@assets/images/project/sui.svg";
import coinIcon4 from "@assets/images/project/chain.png";

const ProjectItems = () => {
  const { data } = projectData;
  const projectsDetails = projectsData;

  const [projectGroup, setProjectGroup] = useState();

  useEffect(() => {
    loadProjectGroup();
  }, []);

  const loadProjectGroup = async () => {
    const projectGroup = await getProjectGroup(projectsDetails);
    setProjectGroup(projectGroup);
  };
  // const projectGroup = await getProjectGroup(projectsDetails);
  console.log("projectGroup", projectGroup);

  return (
    <ProjectItemsStyleWrapper>
      <div className="container">
        <div className="single-project-row">
          <Tabs>
            <TabList>
              <div className="tab_btn_wrapper">
                {projectGroup?.map((child, i) => (
                  <Tab key={i}>
                    <button>{child.projectStatus}</button>
                  </Tab>
                ))}
              </div>

              <div className="item_sorting_list">
                <button>
                  All Access
                  <img src={nextArrowIcon.src} alt="icon" />
                  <ul className="sub-menu">
                    <li>All Access</li>
                    <li>Public</li>
                    <li>Private</li>
                    <li>Community</li>
                  </ul>
                </button>
                <button>
                  All Chains
                  <img src={nextArrowIcon.src} alt="icon" />
                  <ul className="sub-menu">
                    <li>
                      <img src={coinIcon1.src} alt="icon" /> Aptos (APT)
                    </li>
                    <li>
                      <img src={coinIcon2.src} alt="icon" /> Sui (SUI)
                    </li>
                    <li>
                      <img src={coinIcon4.src} alt="icon" /> All Chains
                    </li>
                  </ul>
                </button>
              </div>
            </TabList>
            {/* <TabPanel>test</TabPanel>
            <TabPanel>test2</TabPanel> */}

            {projectGroup?.map((items, i) => (
              <TabPanel key={i} className="row tabs-row">
                {items.projects?.map((project, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    {<ProjectCard key={i} {...project} />}
                  </div>
                ))}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </ProjectItemsStyleWrapper>
  );
};

export default ProjectItems;
