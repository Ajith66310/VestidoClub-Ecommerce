import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const RIVE_FILE = "/loginButton.riv";  
const STATE_MACHINE = "State Machine 1";

const RiveLoginButton = ({ onClick }) => {
  const { rive, RiveComponent } = useRive({
    src: RIVE_FILE,
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, STATE_MACHINE, "hovered");
  const clickInput = useStateMachineInput(rive, STATE_MACHINE, "click");

  return (
    <div
      className="cursor-pointer select-none bg-transparent w-full flex items-center"
      onMouseEnter={() => hoverInput && (hoverInput.value = true)}
      onMouseLeave={() => hoverInput && (hoverInput.value = false)}
      onClick={() => {
        if (clickInput) clickInput.fire();
        if (onClick) onClick();
      }}
      style={{ width: "100%" }}
    >
      <RiveComponent
        style={{
          width: "100%",   
          height: "90px",  
          background: "transparent", 
        }}
      />
    </div>
  );
};

export default RiveLoginButton;
