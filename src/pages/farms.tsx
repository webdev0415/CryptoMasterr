import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Dropdown from "../components/Dowpdown";
import Input from "../components/Input";
import Switch from "../components/Switch";
import TableIcon from "../assets/tbl-icon.png";
import Button from "../components/Button";
import Dialog from "../components/Dialog";
import { ReactComponent as LinkOut } from "../assets/link-out.svg";
import { ReactComponent as Add } from "../assets/add.svg";

function Farms(): JSX.Element {
  const [card, setCard] = useState<number | null>(null);
  const [modal, setModal] = useState(false);

  return (
    <>
      <Dialog visible={modal} onClose={() => setModal(false)} />
      <div className="farms page-wrapper">
        <h1 className="page-heading">Farms</h1>
        <div className="dropdowns-wrapper">
          <Dropdown label="Platform" />
          <Dropdown label="Deposit Type" />
          <Dropdown label="Deposit Asset" />
          <Dropdown label="Reward Asset" />
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
          <Input className="input__outline" search placeholder="Search farms" />
          <Dropdown label="Sort by" className="dropdown-blue" />
        </div>

        <div className="farms__add">            
            <h2 className="contentCenter" > <Add className="mr-r" />Add a farm for your project’s token?</h2>
            <Button className="btn-light btn-max">APPLY NOW</Button>
        </div>

        <div className="table__cover">
          <div className="table">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`tr-cover ${card === index && "tr-selected"}`}
                >
                  <div
                    className="tr"
                    onClick={() => setCard(card === index ? null : index)}
                  >
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
                        <span className="tbl-title">Pending Reward</span>
                        <h3 className="table-bold">0</h3>
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
                    <>
                      <div className="farms-tbl-card">
                        <div className="forms-tbl-card__actions">
                          <Button className="btn-light mr-b btn-svg-r">
                             Underlying Platform <LinkOut />
                          </Button>
                          <Button className="btn-light btn-h-max btn-svg-r">
                            <div className="col contentCenter">
                              <span>
                                Get USDC-GFI LP
                                <LinkOut />
                              </span>
                              <span className="no-mr">
                                Liquidity: <h4>$999.99</h4>
                              </span>
                            </div>
                          </Button>
                        </div>
                        <div className="farms-tbl-card__card">
                          <span>Pending Reward</span>
                          <div className="frm-crd-row">
                            <h4>45.67654 GFI</h4>
                            <Button className="btn-blue btn-max">
                              Harvest
                            </Button>
                          </div>
                        </div>
                        <div className="farms-tbl-card__card contentVertEnd">
                          <span>
                            Wallet Balance: <h4>1,000,500 GFI</h4>
                          </span>
                          <div className="frm-crd-row">
                            <Button
                              className="btn-blue btn-max mr-r"
                              onClick={() => setModal(true)}
                            >
                              Withdraw
                            </Button>
                            <Button className="btn-blue btn-max">
                              Deposit
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="farms-tbl-addr">
                        <span>
                          Start Block: <h4>17663680</h4>
                        </span>
                        <span>
                          End Block: <h4>18663680</h4>
                        </span>
                        <span>
                          Rewards per Block: <h4>35.973</h4>
                        </span>
                        <span>
                          Contract: <h4>0x59...ad54</h4>
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Farms;
