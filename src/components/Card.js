import "../styles.css";
import image1 from "../assets/image/fantom.png"
import image2 from "../assets/image/spirit.jpg"
const Card = (props) => {
  return (
    <div class="card" id="card">
      <div class="card-body">
      <div className="titleCard">
        <div className="imageTitle">
          <img src={image1} className="rounded" width="20rem" />
          <img src={image2} className="rounded" width="20rem" />
        </div>
        <h6>{props.data.token_0.contract_ticker_symbol + '-' + props.data.token_1.contract_ticker_symbol + "  "}<span class="badge bg-secondary">{parseFloat(props.data.annualized_fee).toFixed(2) + "%"}</span></h6>
      </div>
      <hr />
      <div className="detailPools">
        <div className="detailPoolsChild">
          <span>Volume 24H</span>
          <span class="badge bg-secondary">{props.data.volume_24h_quote !== undefined ? "$ " + Number((props.data.volume_24h_quote).toFixed(2)).toLocaleString() : "$ 0.00"}</span>
        </div>
        <div className="detailPoolsChild">
          <span>Volume 7D</span>
          <span class="badge bg-secondary">{props.data.volume_24h_quote !== undefined ? "$ " + Number((props.data.volume_7d_quote).toFixed(2)).toLocaleString() : "$ 0.00"}</span>
        </div>
        <div className="detailPoolsChild">
          <span>Swap Count 24H</span>
          <span class="badge bg-secondary">{props.data.swap_count_24h !== undefined ? Number((props.data.swap_count_24h).toFixed(0)).toLocaleString() : "0"}</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
