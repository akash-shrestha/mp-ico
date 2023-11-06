import Link from "next/link";
import { useState } from "react";
import { RiShareCircleFill } from "react-icons/ri";
import Button from "@components/button";
import StakingItemStyleWrapper from "./StakingItem.style";
import backIcon from "@assets/images/icons/x.svg";

const StakingItem = ({
  title,
  icon,
  apy,
  tvl,
  minimumLocked,
  stake,
  Rewards,
  amountStaked,
  balance,
}) => {
  const [isFlip, setFlip] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setFlip(false);
    setFlip(true);
  };

  return (
    <StakingItemStyleWrapper>
      <div
        className={`staking_flip_card_inner ${isFlip === true ? "active" : ""}`}
      >
        <div className="staking_flip_card_front">
          <div className="staking_flip_card_front_headings">
            <h2>
              <span>
                <img src={icon.src} alt="icon" />
              </span>
              {title}
            </h2>
            <div className="staking_apy">
              <h3>{apy} APY</h3>
            </div>
          </div>
          <div className="staking_flip_card_front_body">
            <ul className="staking_flip_card_front_list">
              <li>
                <span>TVL</span> <strong>{tvl} APT</strong>
              </li>
              <li>
                <span>Minimum Locked</span> <strong>{minimumLocked} APT</strong>
              </li>
              <li>
                <span>LP Staked</span> <strong>{stake} APT</strong>
              </li>
            </ul>
            <div className="staking_flip_card_front_buttons">
              <Button variant="dark" onClick={handleFlip}>
                stake
              </Button>
              <Button variant="dark" onClick={handleFlip}>
                unstake
              </Button>
            </div>
            <div className="staking_flip_card_front_reward">
              <h6>Rewards</h6>
              <h5>{Rewards} APT</h5>
            </div>
            <div className="staking_flip_card_front_buttons widthdraw_card_btn">
              <Button variant="blue" onClick={handleFlip}>
                Widthdraw
              </Button>
            </div>
            <div className="quick_links">
              <Link href="#">
                <a>
                  {" "}
                  Get ACT -BNB <RiShareCircleFill />
                </a>
              </Link>
              <Link href="#">
                <a>
                  {" "}
                  View Contract <RiShareCircleFill />{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* card back */}
        <div className="staking_flip_card_back">
          <div className="staking_flip_card_back_content active-shape">
            <div className="staking_flip_card_back_overlay"></div>
            <div className="staking_flip_card_front_headings">
              <h2>
                <span>
                  <img src={icon.src} alt="icon" />
                </span>
                {title}
              </h2>
              <div className="staking_apy">
                <h3>{apy} APY</h3>
              </div>
            </div>
            <div className="staking_flip_card_back_body">
              <div className="staking_flip_card_back_headings">
                <h2>Stake</h2>
                <button
                  className="staking_flip_card_close_btn"
                  onClick={() => setFlip(false)}
                >
                  <img src={backIcon.src} alt="icon" />
                </button>
              </div>
              <div className="staking_flip_card_back_body_top">
                <div className="staking_flip_card_front_list">
                  <ul>
                    <li>
                      <span>LP Amount staked</span>{" "}
                      <strong>{amountStaked} APT</strong>
                    </li>
                    <li>
                      <span>Balance</span> <strong>{balance} APT</strong>
                    </li>
                  </ul>
                </div>

                <div className="staking_flip_card_back_form">
                  <form>
                    <span>Stake Amount</span>
                    <div className="staking_flip_card_back_form_input">
                      <input type="text" placeholder="0.00 APT" />
                      <button>Max</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="staking_flip_card_back_approve_btn">
                <Button variant="blue">Approve</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StakingItemStyleWrapper>
  );
};

export default StakingItem;
