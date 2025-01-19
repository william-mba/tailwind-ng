import { Bottom } from "./position/bottom.type";
import { InsetX } from "./position/inset-x.type";
import { InsetY } from "./position/inset-y.type";
import { Inset } from "./position/inset.type";
import { Left } from "./position/left.type";
import { Right } from "./position/right.type";
import { Top } from "./position/top.type";

export interface OverlayPosition {
  top?: Top;
  right?: Right;
  bottom?: Bottom;
  left?: Left;
  inset?: Inset | InsetX | InsetY,
};
