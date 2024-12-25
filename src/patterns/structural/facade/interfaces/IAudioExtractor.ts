import { IVideoFile } from './IVideoFile';

export interface IAudioExtractor {
  extract(video: IVideoFile): Buffer;
} 