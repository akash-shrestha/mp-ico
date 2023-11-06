import Link from "next/link";
import CardHover from "@components/cardHover";
import TeamMemberStyleWrapper from "./TeamMember.style";

const TeamMember = ({ avatar, name, designation, socialLinks }) => {
  return (
    <TeamMemberStyleWrapper className="team-item">
      <img src={avatar.src} alt="Team-thumb" />
      <h4 className="team-title mb-8">
        <Link href="/team-details">
          <a>{name}</a>
        </Link>
      </h4>
      <div className="dsc">{designation}</div>
      <ul className="team-icon-list">
        {socialLinks?.map((item, i) => (
          <li key={i}>
            <Link href={item.url}>
              <a>{item.icon}</a>
            </Link>
          </li>
        ))}
      </ul>

      <CardHover />
    </TeamMemberStyleWrapper>
  );
};

export default TeamMember;
