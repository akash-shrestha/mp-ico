import Sidebar from "../SideBar";
import ProjectInfo from "../ProjectInfo/";
import TokenInfo from "../TokenInfo/TokenInfo";
import Summary from "../Summary/Summary";
// import Schedule from "../Schedule/Schedule";
// import Comparison from "../Comparison/Comparison";
// import Statistics from "../Statistics";
// import RoadMap from "../RoadMap/RoadMap";
// import Team from "../Team";
// import Partner from "../Investor";
import ProjectDetailsStyleWrapper from "./ProjectDetails.style";
// import tokenData from "@assets/data/token";
import TokenDetailLeft from "../TokenDetailLeft/TokenDetailLeft";
import TokenDetailRight from "../TokenDetailRight/TokenDetailRight";

const ProjectDetails = ({ props }) => {
  return (
    <ProjectDetailsStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ProjectInfo props={props} />
          </div>
        </div>
        <div className="row token_info_row">
          {/* {props.tokenData?.map((item, i) => (
            <div key={i} className="col-sm-6">
              <TokenInfo {...item} />
            </div>
          ))} */}
          <div className="col-sm-6">
            <TokenDetailLeft props={props} />
          </div>
          <div className="col-sm-6">
            <TokenDetailRight props={props} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <Summary props={props} />
            {/* <Schedule /> */}
            {/* <Comparison /> */}
            {/* <Statistics /> */}
            {/* <RoadMap /> */}
            {/* <Team /> */}
            {/* <Partner /> */}
          </div>
        </div>
      </div>
    </ProjectDetailsStyleWrapper>
  );
};

export default ProjectDetails;
