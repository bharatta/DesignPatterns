export interface IVideoConverter {
  convert(filename: string, format: string): string;
} 