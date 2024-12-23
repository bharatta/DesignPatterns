export interface IProductA {
  operationA(): string;
}

export interface IProductB {
  operationB(): string;
  collaborateWith(collaborator: IProductA): string;
}

export interface IAbstractFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
} 