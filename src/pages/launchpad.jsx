import React from "react";
import Input from "../components/Input";
import Switch from "../components/Switch";
import TableIcon from "../assets/tbl-icon.png";

const Launchpad = () => {
  return (
    <div className="launchpad page-wrapper">
      <h1 className="page-heading">Launchpad</h1>
      <div className="select-action-wrapper">
        <Switch
          options={[
            {
              label: "All",
              value: "all",
            },
            {
              label: "GFI",
              value: "cfi",
            },
            {
              label: "Community",
              value: "Community",
            },
            {
              label: "Private",
              value: "Private",
            },
          ]}
        />
        <Switch
          options={[
            {
              label: "All",
              value: "all",
            },
            {
              label: "Open",
              value: "Open",
            },
            {
              label: "Upcomming",
              value: "Upcomming",
            },
            {
              label: "Ended",
              value: "Ended",
            },
          ]}
        />
        <Input className="input__outline" search placeholder="Search" />

        <Switch
          options={[
            {
              label: "All",
              value: "all",
            },
            {
              label: "Joined",
              value: "joined",
            },
          ]}
        />
      </div>
      <div className="table__cover">
        <div className="table">
          <div className="tr">
            <div className="td">Pool</div>
            <div className="td td-sm">Access</div>
            <div className="td td-sm">Price per token</div>
            <div className="td td-sm">Max Purchase</div>
            <div className="td td-sm">Pool Allocation</div>
            <div className="td td-sm">Filled</div>
            <div className="td td-sm">Status</div>
          </div>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={index} className={`tr-cover`}>
                <div className="tr">
                  <div className="td">
                    <div className="tbl-main">
                      <div className="tbl-main__icon">
                        <img src={TableIcon} alt="" />
                      </div>
                      <div className="tbl-main__info">
                        <div className="tbl-bold">GFI-USDC</div>
                        <span className="tbl-text">Gravity Finance</span>
                      </div>
                    </div>
                  </div>
                  <div className="td td-sm">
                    <div className="tbl-chip">CFI Tier 1</div>
                  </div>
                  <div className="td td-sm">
                    <h3 className="tbl-bold">
                      1 <span>USDC</span>
                    </h3>
                  </div>
                  <div className="td td-sm">
                    <h3 className="tbl-bold">
                      200 <span>USDC</span>
                    </h3>
                  </div>
                  <div className="td td-sm">
                    <h3 className="tbl-bold">
                      350,000 <span>GLXY</span>
                    </h3>
                  </div>
                  <div className="td td-sm">
                    <h3 className="tbl-bold">3453.65%</h3>
                  </div>
                  <div className="td td-sm">
                    <h3 className="tbl-bold">Open</h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
