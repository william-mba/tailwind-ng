export * from './elements'
export * from './forms'
export * from './layout'
export * from './overlays'
import { Provider } from '@angular/core'

/**
 * Provides the Tailwind NG UI config with the given customization if any.
 */
export function provideUI(...features: Provider[]): Provider[] {
  return features
}
