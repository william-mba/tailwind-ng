import { AlignContent } from "../flex-grid/align-content"
import { AlignItem } from "../flex-grid/align-item"
import { AlignSelf } from "../flex-grid/align-selft"
import { FlexDirection } from "../flex-grid/flex-direction"
import { FlexGrow } from "../flex-grid/flex-grow"
import { FlexShrink } from "../flex-grid/flex-shrink"
import { FlexWrap } from "../flex-grid/flex-wrap"
import { Gap } from "../flex-grid/gap"
import { GridColumns } from "../flex-grid/grid-cols"
import { JustifyContent } from "../flex-grid/justify-content"
import { PlaceContent } from "../flex-grid/place-content"
import { PlaceItems } from "../flex-grid/place-items"

export type Display = Partial<{
  type:
  | "flex"
  | "grid"
  | "sm:flex"
  | "sm:grid"
  | "inline-flex"
  | "inline-grid",

  /**Utilities for controlling how flex and grid items are positioned along a container's cross axis.
   * @see https://tailwindcss.com/docs/align-items
   */
  alignItem: AlignItem,

  /**Utilities for controlling the direction of flex items.
   * @see https://tailwindcss.com/docs/flex-direction
   */
  flexDirection: FlexDirection,

  /**Utilities for controlling how flex items grow.
   * @see https://tailwindcss.com/docs/flex-grow
   */
  flexGrow: FlexGrow,

  /**Utilities for controlling how flex items shrink.
   * @see https://tailwindcss.com/docs/flex-shrink
   */
  flexShrink: FlexShrink,

  /**Utilities for controlling how flex items wrap.
   * @see https://tailwindcss.com/docs/flex-wrap
   */
  flexWrap: FlexWrap,

  /**Utilities for controlling gutters between grid and flexbox items.
   * @see https://tailwindcss.com/docs/gap
   */
  gap: Gap,

  /**Utilities for specifying the columns in a grid layout.
   * @see https://tailwindcss.com/docs/grid-template-columns
   */
  gridCols: GridColumns,

  /**Utilities for controlling how flex and grid items are positioned along a container's main axis.
   * @see https://tailwindcss.com/docs/justify-content
   */
  justifyContent: JustifyContent,

  /**Utilities for controlling how content is justified and aligned at the same time.
   * @see https://tailwindcss.com/docs/place-content
   */
  placeContent: PlaceContent,

  /**Utilities for controlling how items are justified and aligned at the same time.
   * @see https://tailwindcss.com/docs/place-items
   */
  placeItems: PlaceItems,

  /**Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.
   * @see https://tailwindcss.com/docs/align-self
   */
  alignSelf: AlignSelf,

  /**Utilities for controlling how rows are positioned in multi-row flex and grid containers.
   * @see https://tailwindcss.com/docs/align-content
   */
  alignContent: AlignContent,
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
  | "grid"
  | "sm:flex"
  | "sm:grid"
  | "inline-flex"
  | "inline-grid"

