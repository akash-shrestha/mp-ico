import Button from "@components/button";
import CardHover from "@components/cardHover";
import CTAStyleWrapper from "./CTA.style";

const CTA = () => {
  return (
    <CTAStyleWrapper>
      <div className="container">
        <div className="cta-area text-center">
          <h2 className="title">
            Apply for project <br />
            incubation
          </h2>
          <div className="dsc">
            We will help you in each and every step of launching your protocol
          </div>
          <Button
            variant="mint"
            md
            href="https://forms.gle/a7TLNxVfhHDnAQsL6"
            target="__blank"
          >
            Apply For IDO
          </Button>
          <CardHover />
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
