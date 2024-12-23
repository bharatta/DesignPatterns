export interface IFlyweight {
  operation(extrinsicState: string): void;
}

export interface IFlyweightFactory {
  getFlyweight(key: string[]): IFlyweight;
} 