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
      className="cursor-pointer select-none w-full bg-transparent flex justify-center items-center"
      onMouseEnter={() => hoverInput && (hoverInput.value = true)}
      onMouseLeave={() => hoverInput && (hoverInput.value = false)}
      onClick={() => {
        if (clickInput) clickInput.fire();
        if (onClick) onClick();
      }}
    >
      <RiveComponent
        style={{
          width: "220px", 
          height: "70px", 
          background: "transparent", 
        
                }}
      />
    </div>
  );
};

export default RiveLoginButton;
