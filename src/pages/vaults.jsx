import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Dropdown from "../components/Dowpdown";
import Input from "../components/Input";
import Switch from "../components/Switch";
import TableIcon from "../assets/tbl-icon.png";
import Button from "../components/Button";

import { ReactComponent as LinkOut } from "../assets/link-out.svg";

const Vaults = () => {
  const [card, setCard] = useState(null);

  return (
    <div className="vaults page-wrapper">
      <h1 className="page-heading">Vaults</h1>
      <div className="dropdowns-wrapper">
        <Dropdown label="Vault Type" />
        <Dropdown label="Platform" />
        <Dropdown label="Deposit Type" />
        <Dropdown label="Deposit Asset" />
        <Dropdown label="Reward Asset" />
        <Dropdown label="Strategy Type" />
      </div>
      <div className="select-action-wrapper">
        <Switch
          options={[
            {
              label: "All",
              value: "all",
            },
            {
              label: "Active",
              value: "active",
            },
            {
              label: "Legacy",
              value: "legacy",
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
              label: "Joined",
              value: "joined",
            },
          ]}
        />
        <Input className="input__outline" search placeholder="Search vaults" />
        <Dropdown label="Access" className="dropdown-blue" />
        <Dropdown label="Sort by" className="dropdown-blue" />
      </div>

      <div className="table__cover">
        <div className="table">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                onClick={() => setCard(card === index ? null : index)}
                className={`tr-cover ${card === index && "tr-selected"}`}
              >
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
                  <div className="td">
                    <div className="tbl-col">
                      <span className="tbl-title">Reward Asset</span>
                      <h3 className="table-bold">GFI</h3>
                    </div>
                  </div>
                  <div className="td td-sm">
                    <div className="tbl-col">
                      <span className="tbl-title">Fee</span>
                      <h3 className="table-bold">2%</h3>
                    </div>
                  </div>
                  <div className="td td-sm">
                    <div className="tbl-col">
                      <span className="tbl-title">Balance</span>
                      <h3 className="table-bold">0</h3>
                    </div>
                  </div>
                  <div className="td td-sm">
                    <div className="tbl-col">
                      <span className="tbl-title">APY</span>
                      <h3 className="table-bold">0</h3>
                    </div>
                  </div>
                  <div className="td td-sm">
                    <div className="tbl-col">
                      <span className="tbl-title">TVL</span>
                      <h3 className="table-bold">0</h3>
                    </div>
                  </div>
                  <div className="td td-sm-x">
                    <RiArrowRightSLine className="tr-toggle" />
                  </div>
                </div>
                {index === card && (
                  <div className="vaults-tbl-card">
                    <div className="vaults-tbl-card__info">
                      <span>
                        Strategy: <h4>Farm Compounding</h4>
                      </span>
                      <ol>
                        <li>
                          User deposits the associated farm's deposit asset
                          (USDC-GFI).
                        </li>
                        <li>
                          The asset is deposited into the associated farm and
                          rewards are harvested periodically.
                        </li>
                        <li>
                          The reward asset is converted into the deposit asset/s
                          and deposited into the associated farm.
                        </li>
                      </ol>
                      <div className="v-info-actions">
                        <Button className="btn-light">
                          <LinkOut /> Get USDC-GFI LP
                        </Button>
                        <Button className="btn-light ">
                          <LinkOut /> Underlying Platform
                        </Button>
                        <Button>Manual Compound</Button>
                      </div>
                    </div>
                    <div className="vaults-tbl-card__actions">
                      <span>
                        Access: <h4>GFI Tier 3</h4>
                      </span>
                      <span>
                        Wallet Balance: <h4>4000 GFI</h4>
                      </span>
                      <Button className="btn-blue btn-max mr-b">Deposit</Button>
                      <Button className="btn-blue btn-max mr-b">
                        Withdraw
                      </Button>
                      <span>
                        Contract: <h4>0x59...ad54</h4>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
        {/* <table className="table">
          <tbody>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <tr key={index}>
                  <td>
                    <div className="tbl-main">
                      <div className="tbl-main__icon">
                        <img src={TableIcon} alt="" />
                      </div>
                      <div className="tbl-main__info">
                        <div className="tbl-bold">GFI-USDC</div>
                        <span className="tbl-text">Gravity Finance</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="tbl-col">
                      <span className="tbl-title">Reward Asset</span>
                      <h3 className="table-bold">GFI</h3>
                    </div>
                  </td>
                  <td className="td-sm">
                    <div className="tbl-col">
                      <span className="tbl-title">Fee</span>
                      <h3 className="table-bold">2%</h3>
                    </div>
                  </td>
                  <td className="td-sm">
                    <div className="tbl-col">
                      <span className="tbl-title">Balance</span>
                      <h3 className="table-bold">0</h3>
                    </div>
                  </td>
                  <td className="td-sm">
                    <div className="tbl-col">
                      <span className="tbl-title">APY</span>
                      <h3 className="table-bold">0</h3>
                    </div>
                  </td>
                  <td className="td-sm">
                    <div className="tbl-col">
                      <span className="tbl-title">TLY</span>
                      <h3 className="table-bold">0</h3>
                    </div>
                  </td>
                  <td>
                    <RiArrowRightSLine />
                  </td>
                </tr>
              ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Vaults;
