import TeamMember from "./teamMember";
import TeamStyleWrapper from "./Team.style";
import data from "@assets/data/team";
const Team = () => {
  return (
    <TeamStyleWrapper id="team">
      <div className="row">
        {data?.map((member, i) => (
          <div key={i} className="col-lg-3 col-md-6">
            <TeamMember {...member} />
          </div>
        ))}
      </div>
    </TeamStyleWrapper>
  );
};

export default Team;
