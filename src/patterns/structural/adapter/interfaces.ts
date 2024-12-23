// Target interface that the client expects to work with
export interface ITarget {
  request(): string;
}

// The interface that needs to be adapted
export interface IAdaptee {
  specificRequest(): string;
} 