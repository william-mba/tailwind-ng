export type BackgroundGradient = {
  from: string,
  to: string,
  direction: 'bg-gradient-to-r' | 'bg-gradient-to-l',
  modifier: Record<string, object>
}
