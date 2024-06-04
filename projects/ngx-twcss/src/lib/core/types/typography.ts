import { FontSize } from "./typography/font-size";
import { FontWeight } from "./typography/font-weight";
import { TextColor } from "./typography/text-color";
import { TextWrap } from "./typography/text-wrap";
import { VerticalAlign } from "./typography/vertical-align";

export type Typography = {
  fontSize: FontSize,
  fontWeight: FontWeight,
  textColor: TextColor,
  textWrap: TextWrap,
  verticalAlign: VerticalAlign
};
