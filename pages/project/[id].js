import { Fragment } from "react";

import { useModal } from "src/utils/ModalContext";
import Layout from "@components/layout";
import SEO from "@components/SEO";
import WalletModal from "@components/modal/walletModal/WalletModal";
import ShareModal from "@components/modal/shareModal/ShareModal";
import MetamaskModal from "@components/modal/metamaskModal/MetamaskModal";
import BuyTokenModal from "src/components/modal/buyTokenModal/BuyTokenModal";
import Header from "@sections/Header/aptos";
import PageHeader from "@sections/ProjectPages/ProjectDetails/v1/PageHeader";
import ProjectDetails from "@sections/ProjectPages/ProjectDetails/v1";
import Footer from "@sections/Footer/v1";
import { getProjectPaths } from "src/lib/projectLoader";
import projectsData from "../../src/assets/data/projects/projectsDetails";
import { getPresaleInfo } from "src/lib/aptosLoader";
import { getProjectDetails } from "src/lib/projectLoader";

const ProjectDetail = (props) => {
  const {
    walletModalvisibility,
    shareModalVisibility,
    metamaskModal,
    buyTokenModalVisibility,
  } = useModal();

  return (
    <Fragment>
      <SEO title="project details" />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        {shareModalVisibility && <ShareModal />}
        {metamaskModal && <MetamaskModal />}
        {buyTokenModalVisibility && (
          <BuyTokenModal presaleId={props.presale_id} />
        )}
        <Header />
        <PageHeader currentPage="PROJECT DETAILS " />
        <ProjectDetails props={props} />
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default ProjectDetail;

export const getStaticPaths = () => {
  const paths = getProjectPaths(projectsData);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const projectData = projectsData.find((project) => project.id === id);
  const presaleId = projectData.presale_id;
  const projectChainData = await getPresaleInfo(presaleId);
  const mergedProjectData = { ...projectData, ...projectChainData };
  const projectDetails = getProjectDetails(mergedProjectData);
  const mergedProjectDetails = { ...mergedProjectData, ...projectDetails };

  return {
    props: mergedProjectDetails,
  };
};
