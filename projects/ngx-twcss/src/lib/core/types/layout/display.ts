import { AlignItem } from "../flex-grid/align-item"
import { Gap } from "../flex-grid/gap"
import { JustifyContent } from "../flex-grid/justify-content"

export type Display = Partial<{
  type:
  | "flex"
  | "sm:flex"
  | "*:sm:flex"
  | "grid"
  | "inline-flex"
  | "inline-grid",
  /**Utilities for controlling gutters between grid and flexbox items.
   * @see https://tailwindcss.com/docs/gap
   */
  gap: Gap,
  /**Utilities for controlling how flex and grid items are positioned along a container's cross axis.
   * @see https://tailwindcss.com/docs/align-items
   */
  alignItem: AlignItem,
  /**Utilities for controlling how flex and grid items are positioned along a container's main axis.
   * @see https://tailwindcss.com/docs/justify-content
   */
  justifyContent: JustifyContent
}>
  | "block"
  | "table"
  | "hidden"
  | "inline"
  | "inline-block"
  | "inline-table"
  | "table-cell"
  | "table-column"
  | "table-caption"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row-group"
  | "table-row"
  | "flow-root"
  | "contents"
  | "list-item"
  | "flex"
  | "sm:flex"
  | "grid"
  | "inline-flex"
  | "inline-grid"

