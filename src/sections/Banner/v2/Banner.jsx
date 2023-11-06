import Link from "next/link";

import Button from "@components/button";
import rocketParticle from "@assets/images/homeV2/rocketStar.svg";
import logo from "@assets/images/logo-wobg.png";
import tokenImg1 from "@assets/images/homeV2/aptos.svg";
import tokenImg2 from "@assets/images/homeV2/sui.svg";

import BannerStyleWrapper from "./Banner.style";

const Banner = () => {
  const particles = [
    rocketParticle,
    rocketParticle,
    rocketParticle,
    rocketParticle,
    rocketParticle,
  ];
  const tokenImages = [tokenImg1, tokenImg2];

  return (
    <>
      <BannerStyleWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="gamfi_v2_hero_left">
                <h2>
                  {" "}
                  First Gamified
                  <span> IDO</span> Launchpad in Move Ecosystem
                </h2>
                <p>Next Generation Launchpad for Next Billion users</p>
                <div className="banner-btns">
                  <Button href="/projects" md variant="mint">
                    View Projects
                  </Button>
                  <Button
                    href="https://forms.gle/a7TLNxVfhHDnAQsL6"
                    target="__blank"
                    md
                    variant="outline"
                  >
                    Apply Project
                  </Button>
                </div>

                <div className="buy_token">
                  <h6>Build On</h6>
                  <div className="token-list">
                    <Link href="# ">
                      <a>
                        <img
                          src={tokenImg1.src}
                          alt="token logo"
                          className="img-fluid img-banner-aptos"
                        />
                      </a>
                    </Link>
                    <Link href="# ">
                      <a>
                        <img
                          src={tokenImg2.src}
                          alt="token logo"
                          className="img-fluid img-banner-sui"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gamfi_v2_hero_right">
                <div className="gamfi_v2_hero_thumb">
                  <span className="rocket_thumb">
                    {/* <img src={rocketThumb.src} alt="Rocket thumb" /> */}
                    {/* <img src={rocket.src} alt="Rocket thumb" /> */}
                  </span>

                  {particles?.map((particle, i) => (
                    <span
                      key={i}
                      className={`rocket_particle particle_${i + 1}`}
                    >
                      <img src={particle.src} alt="rocket particle" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
