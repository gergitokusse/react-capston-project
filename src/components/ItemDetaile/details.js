import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { setTitle, setActiveCoin } from '../../redux/Slice/ItemSlice';
import './details.css';

const Details = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const ad = useSelector((state) => state.crypto.cryptos.find((el) => el.uuid === location.state));
  const date = new Date(ad.listedAt * 1000);
  useEffect(() => {
    dispatch(setTitle(`${ad.symbol} Treds`));
    dispatch(setActiveCoin(location.state));
  });

  return (
    <div key={ad.uuid} className="details">
      <div className="details-all-stats">{ad.name.toUpperCase()}</div>
      <div className="details-top-details">
        <div className="details-crypto-icon">
          <img src={ad.iconUrl} alt="Crypto" />
        </div>
        <div className="details-crypto-intro">
          <span>
            <span>Crypto Currency: </span>
            <span>{ad.name}</span>
          </span>
          <span>
            <span>Price In BTC: </span>
            <span>
              {Number(ad.btcPrice).toLocaleString(undefined, 2)}
            </span>
          </span>
          <span>
            <Link to={ad.coinrankingUrl} target="_blank">
              External Resource
            </Link>
          </span>
        </div>
      </div>
      <div className="details-crypto-analytics">
        <div>
          <span>Name: </span>
          <span>{ad.name}</span>
        </div>
        <div>
          <span>Volume in 24h:</span>
          <span>
            {`${Number(ad['24hVolume']).toLocaleString(
              undefined,
              2,
            )} $`}
          </span>
        </div>
        <div>
          <span>Market Capital:</span>
          <span>
            {`${Number(ad.marketCap).toLocaleString(undefined, 2)} $`}
          </span>
        </div>
        <div>
          <span>Price in USD: </span>
          <span>
            {`${Number(ad.price).toLocaleString(undefined, 2)} $`}
          </span>
        </div>
        <div>
          <span>Listed At:</span>
          <span>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</span>
        </div>
        <div>
          <span>Change in 24h: </span>
          <span>{ad.change}</span>
        </div>
        <div>
          <span>Rank: </span>
          <span>{ad.rank}</span>
        </div>
        <div>
          <span>Low Volume: </span>
          <span>{ad.lowVolume}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
