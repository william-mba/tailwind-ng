import { BaseConfig } from './config.type';

export type ShallowUnionOf<T, K extends keyof T = keyof T> = Extract<T[K], string>;

export type ClassName = ShallowUnionOf<BaseConfig> | ShallowUnionOf<BaseConfig>[] | {};
