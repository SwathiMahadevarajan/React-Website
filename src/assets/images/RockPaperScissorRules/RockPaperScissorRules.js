import React from "react";
import RockPaperScissorRulesImg from "./image-rules.png";
import { Image } from "components";

const RockPaperScissorRules = (props) => (
  <Image
    src={RockPaperScissorRulesImg}
    alt="RockPaperScissorRulesImg"
    {...props}
  />
);

export default RockPaperScissorRules;
