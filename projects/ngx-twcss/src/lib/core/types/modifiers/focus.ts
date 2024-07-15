import { Theme } from "../theme";

export type Focus = Partial<Omit<Theme, 'focus' | 'hover'>>
