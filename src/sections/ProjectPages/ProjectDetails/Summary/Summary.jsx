import { useState } from "react";
import ModalVideo from "react-modal-video";
import { FaPlay } from "react-icons/fa";

import videoThumb from "@assets/images/project/project-video.jpg";
import SummaryStyleWrapper from "./Summary.style";

const Summary = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SummaryStyleWrapper id="projectSummary">
      <h4 className="widget_title">Project Summary</h4>
      <p>{props.summary}</p>
      <div className="vedio_player">
        <img src={videoThumb.src} alt="video thumb" />
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="1vpzW13m_IM"
          onClose={() => setIsOpen(false)}
        />
        <span onClick={() => setIsOpen(true)}>
          {" "}
          <FaPlay />{" "}
        </span>
      </div>
    </SummaryStyleWrapper>
  );
};

export default Summary;
