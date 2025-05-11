import { inject, Injectable } from '@angular/core'
import { InjectionTokenFactory } from '../tokens'

/**
 * @TailwindNG Z-Index Seed
 * @returns The z-index seed value. Default is 50.
 */
export const Z_INDEX_SEED = InjectionTokenFactory.create(50, 'Z_INDEX_SEED')

/**
 * @TailwindNG ZIndexer - A lightweight z-index service.
 * - Provides a unique z-index value on each call to `next`.
 * - The first z-index value is provided by the `Z_INDEX_SEED` injection token.
 * - The seed value can be overridden by providing a new value. default is 50.
 * @Example
 * ```ts
 *  providers: [ { provide: Z_INDEX_SEED, useValue: 100 }, ZIndexer ]
 * ```
 * @returns The z-index value
 */
@Injectable({ providedIn: 'root' })
export class ZIndexer {
  private zIndex = inject(Z_INDEX_SEED)
  get next(): number {
    return this.zIndex++
  }

  get current(): number {
    return this.zIndex
  }
}
