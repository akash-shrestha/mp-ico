import Link from "next/link";

import ProgressBar from "@components/progressBar";
import CountDown from "@components/countDown";
import Button from "src/components/button";
import DisplayDate from "src/components/displayDate/DisplayDate";
import projectIcon from "@assets/images/project/explore.png";
import coinIcon from "@assets/images/project/aptos.svg";
// import socialData from "@assets/data/social";
import ProjectInfoStyleWrapper from "./ProjectInfo.style";
import { useModal } from "src/utils/ModalContext";
import ClaimTokenButton from "src/components/claimTokenButton/ClaimTokenButton";

const ProjectInfo = ({ props }) => {
  const settings = {
    showTitle: true,
    size: 30,
    labelSize: 20,
    direction: "right",
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "D",
    hourTitle: "H",
    minuteTitle: "M",
    secondTitle: "S",
    id: "countdownwrap",
  };

  const { toggleBuyTokenModalVisibility } = useModal();

  const handleBuyTokenBtn = () => {
    toggleBuyTokenModalVisibility();
  };

  const APTDecimal = 100000000;

  return (
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="price-inner d-flex">
              <div className="image-icon">
                <img src={projectIcon.src} alt="icon" />
              </div>
              <div className="price-details">
                <h3>
                  <a>{props.title}</a>
                </h3>
                <div className="dsc">PRICE (DDO) : {props.tokenPrice} APT</div>
              </div>
            </div>
            {props.projectStatus.status == "ongoing" && (
              <div className="all-raise">
                Total Raise {props.amount_raised} ( {props.totalRaisePercent} )
              </div>
            )}
          </div>
          <div className="allocation-max text-center">
            <img src={coinIcon.src} alt="icon" />
            <div className="allocation">
              Allocation: {props.max_spend_per_user / APTDecimal} APT Max
            </div>
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">
              SALES{" "}
              {props.projectStatus.status === "starting"
                ? "STARTS IN"
                : props.projectStatus.status === "ongoing"
                ? "ENDS IN"
                : "ENDED IN"}
            </div>

            {props.projectStatus.status !== "ended" ? (
              <CountDown {...settings} count={props.projectStatus.count} />
            ) : (
              <DisplayDate timestamp={props.sale_end_ts} />
            )}
            <div className="targeted-raise-amount">
              Targeted Raise {props.amount_to_be_raised / APTDecimal} APT
            </div>
          </div>
        </div>
        {props.projectStatus.status == "ongoing" && (
          <div className="progress-inner">
            <ProgressBar progress={props.progressPercent} />
          </div>
        )}
        <div className="project_card_footer">
          {props.sale_status == "2" && (
            <Button onClick={handleBuyTokenBtn} sm>
              Buy Token
            </Button>
          )}
          {props.sale_status == "3" && (
            <Button sm>
              <ClaimTokenButton />
            </Button>
          )}
          {props.projectStatus.status == "ongoing" && (
            <div className="participants">
              Participants {props.participants}
            </div>
          )}
          <div className="social_links">
            {props.socialData?.map((profile, i) => (
              <Link key={i} href={profile.url}>
                <a>
                  <img src={profile.icon.src} alt="icon" />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ProjectInfoStyleWrapper>
  );
};

export default ProjectInfo;
