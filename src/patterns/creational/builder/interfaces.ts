export interface IBuilder {
  reset(): void;
  buildStepA(): void;
  buildStepB(): void;
  buildStepC(): void;
}

export interface IProduct {
  parts: string[];
  listParts(): void;
} 