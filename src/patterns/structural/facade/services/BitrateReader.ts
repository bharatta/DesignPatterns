import { IBitrateReader, IVideoFile } from '../interfaces';

export class BitrateReader implements IBitrateReader {
  read(file: IVideoFile): number {
    console.log(`Reading bitrate for ${file.name}`);
    return 1000;
  }
} 