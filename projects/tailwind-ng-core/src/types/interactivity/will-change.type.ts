export type WillChange =
  | 'will-change-auto'
  | 'will-change-scroll'
  | 'will-change-contents'
  | 'will-change-transform'
  | (`will-change-${string}` & {});
