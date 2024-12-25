import { IVideoCompressor } from '../interfaces';

export class VideoCompressor implements IVideoCompressor {
  compress(video: Buffer, quality: number): Buffer {
    console.log(`Compressing video with quality ${quality}`);
    return video;
  }
} 