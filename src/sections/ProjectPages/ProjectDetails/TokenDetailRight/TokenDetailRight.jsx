import titleShape from "@assets/images/project/project-heading-image.png";
import TokenInfoStyleWrapper from "./TokenDetailRight.style";

const TokenDetailRight = ({ props }) => {
  return (
    <TokenInfoStyleWrapper>
      <div className="token_info_title">
        <h4>{props.title}</h4>
        <img src={titleShape.src} alt="shape" />
      </div>
      <ul className="token_info_list">
        {/* {tokenInfo?.map((info, i) => (
          <li key={i}>
            <span className="token_info_key">{info.title}</span>
            <span className="token_info_value">{info.text}</span>
          </li>
        ))} */}
        <li>
          <span className="token_info_key">Token Name</span>
          <span className="token_info_value">{props.name}</span>
        </li>
        <li>
          <span className="token_info_key">Token Symbol</span>
          <span className="token_info_value">{props.symbol}</span>
        </li>
        <li>
          <span className="token_info_key">Decimals</span>
          <span className="token_info_value">{props.decimals}</span>
        </li>
        <li>
          <span className="token_info_key">Address</span>
          <span className="token_info_value">
            <a target="_blank" href={props.address}>
              {props.address}
            </a>
          </span>
        </li>
        <li>
          {props.totalSupply.length > 0 && (
            <>
              <span className="token_info_key">Total Supply</span>
              <span className="token_info_value">{props.totalSupply}</span>
            </>
          )}
        </li>
      </ul>
    </TokenInfoStyleWrapper>
  );
};

export default TokenDetailRight;
