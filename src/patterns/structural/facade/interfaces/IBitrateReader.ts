import { IVideoFile } from './IVideoFile';

export interface IBitrateReader {
  read(file: IVideoFile): number;
} 