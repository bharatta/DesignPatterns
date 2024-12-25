export interface IVideoCompressor {
  compress(video: Buffer, quality: number): Buffer;
} 