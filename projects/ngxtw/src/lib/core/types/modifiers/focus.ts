import { ElementConfig } from "../element.config";
import { Theme } from "../theme";

export type Focus = Partial<Omit<Theme, 'focus' | 'hover'>> &
  Partial<Pick<ElementConfig, 'fontWeight' | 'borderWidth' | 'inset'>>;
