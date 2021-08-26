import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { ReactComponent as ETH } from "../assets/eth.svg";
import { ReactComponent as BTC } from "../assets/btc.svg";

const Governance = () => {
  return (
    <div className="governance page-wrapper">
      <h1 className="page-heading">$0.0069</h1>
      <div className="governance__head">
        <div className="gov-mrk">
          <div className="gov-card mr-b">
            <div className="row spaceBetween mr-b-lg">
              <div className="col">
                <div className="gov-card-head">Inital Max Supply</div>
                <div className="gov-card-bold">1,200,000,000</div>
              </div>
              <div className="col">
                <div className="gov-card-head">Tokens Issued</div>
                <div className="gov-card-bold">220,760,149</div>
              </div>
            </div>
            <div className="row spaceBetween">
              <div className="col">
                <div className="gov-card-head">Tokens Burned</div>
                <div className="gov-card-bold">7</div>
              </div>
              <div className="col">
                <div className="gov-card-head">Circulating Supply</div>
                <div className="gov-card-bold">220,760,142</div>
              </div>
            </div>
          </div>
          <div className="gov-card mr-b">
            <div className="row spaceBetween">
              <div className="col">
                <div className="gov-card-head">Market Cap</div>
                <div className="gov-card-bold">$1,523,244.98</div>
              </div>
              <div className="col">
                <div className="gov-card-head">Fully Diluted Market Cap</div>
                <div className="gov-card-bold">$8,279,99.95</div>
              </div>
            </div>
          </div>
          <div className="gov-card">
            <div className="row spaceBetween">
              <div className="col">
                <div className="gov-card-head">wBTC Backing:</div>
                <div className="gov-card-bold">158.23</div>
                <div className="gov-card-sub">(.746 per GFI)</div>
              </div>
              <div className="col">
                <div className="gov-card-head">Intrinsic Value</div>
                <div className="gov-card-bold">$7,134,300</div>
                <div className="gov-card-sub">($33,652.35 per GFI)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="gov-info">
          <h2 className="mr-b">GFI Holder Benefits</h2>
          <div className="gov-info-desc">
            As per our WhitePaper, GFI holders will receieve various benefits
            throughout our platform. This included exclusive access to IDO
            pools, fee discounts and various other things. Today we are happy to
            release the requirements of this program which consists of a 3 tier
            structure.
          </div>
          <ul>
            <li>Tier 1: 50,000 GFI</li>
            <li>Tier 2: 250,000 GFI</li>
            <li>Tier 3: 500,000 GFI</li>
          </ul>
          <div className="gov-info-desc">
            These parameters can be adjusted when the GFI price increases (or
            for other reasons). The exact benefits of each tier will be annouced
            separately.
          </div>
        </div>
      </div>
      <h1 className="page-heading mr-t-lg">Your GFI</h1>
      <div className="governance__overview mr-b">
        <div className="gov-card">
          <div className="gov-card-head">Balance</div>
          <div className="gov-card-bold">500</div>
        </div>
        <div className="gov-card">
          <div className="gov-card-head">wBTC Backing:</div>
          <div className="gov-card-bold">.625</div>
        </div>
        <div className="gov-card">
          <div className="gov-card-head">Intrinsic Value</div>
          <div className="gov-card-bold">$39,375</div>
        </div>
        <div className="gov-card no-mr">
          <div className="gov-card-head">Your Tier</div>
          <div className="gov-card-bold">-</div>
        </div>
      </div>
      <div className="governance__overview">
        <div className="gov-card">
          <div className="gov-card-bold mr-b">
            <div className="row centerContent">
              <ETH className="mr-r-sm" /> Claim Earnings
            </div>
          </div>
          <div className="col mr-b">
            <span>Avaiable:</span>
            <div className="gov-card-bold">150 ETH</div>
          </div>
          <Button className="btn-max">CLAM ETH</Button>
        </div>
        <div className="gov-card">
          <div className="gov-card-bold mr-b">
            <div className="row centerContent">
              <BTC className="mr-r-sm" /> Redeem wBTC Backing
            </div>
          </div>
          <div className="row">
            <Input placeholder="Enter GFI amount of burn" />
            <div className="col mr-b mr-l">
              <div className="gov-card-head">wBTC Amount</div>
              <span>-</span>
            </div>
          </div>
          <Button className="btn-max disable">REDEEM NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default Governance;
