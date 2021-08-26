import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Button from "./Button";
import Input from "./Input";

const Dialog = ({ onClose, visible }) => {
  return !visible ? (
    <></>
  ) : (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="dialog" onClick={(event) => event.stopPropagation()}>
        <div className="dialog__close" onClick={onClose}>
          <RiCloseLine />
        </div>
        <h2 className="dialog__title">
          <span>Deposit</span> GFI-USDC LP
        </h2>
        <div className="col">
          <span className="mr-b-sm">
            Wallet Balance: <strong>1000</strong>
          </span>
          <div className="row contentCenter mr-b-lg">
            <Input placeholder="0.0" />
            <strong className="mr-l primary">Max</strong>
          </div>
        </div>

        <div className="row">
          <Button className="btn-blue btn-max mr-r">Cancle</Button>
          <Button className="btn-blue btn-max disable">Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
