import { IAudioExtractor, IVideoFile } from '../interfaces';

export class AudioExtractor implements IAudioExtractor {
  extract(video: IVideoFile): Buffer {
    console.log(`Extracting audio from ${video.name}`);
    return Buffer.from([]);
  }
} 