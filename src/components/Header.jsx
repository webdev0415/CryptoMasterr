import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as LogoSm } from "../assets/logo-sm.svg";
import { ReactComponent as Connect } from "../assets/connect.svg";
import Button from "./Button";
import { RiMenuFill } from "react-icons/ri";

const Header = ({ setOpen }) => {
  const history = useHistory();
  const links = [
    {
      name: "Exchange",
      path: "/exchange",
    },
    {
      name: "Farms",
      path: "/farms",
    },
    {
      name: "Vaults",
      path: "/vaults",
    },
    {
      name: "Launchpad",
      path: "/launchpad",
    },
    {
      name: "Governance",
      path: "/governance",
    },
  ];

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__mobile">
          <Logo />
          <RiMenuFill className="hdr-menu" onClick={() => setOpen(true)} />
        </div>
        <div className="header__links">
          <Logo />
          <div className="hdr-div" />
          {links.map((link, index) => {
            return (
              <div
                key={index}
                onClick={() => history.push(link.path)}
                className={`hdr-link ${
                  link.path === history.location.pathname && "hdr-link-selected"
                }`}
              >
                {link.name}
              </div>
            );
          })}
        </div>
        <div className="header__actions">
          <Button className="btn-light">
            <LogoSm /> $525.41
          </Button>
          <Button>Buy GFI </Button>
          <Button className="btn-outline no-mr">
            <Connect />
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
