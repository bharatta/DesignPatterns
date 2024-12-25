import { 
  IVideoConverter, 
  IAudioExtractor,
  IVideoCompressor,
  IBitrateReader,
  ICodec,
  IVideoFile 
} from '../interfaces';
import { VideoFile } from '../models/VideoFile';
import { MPEG4Codec } from '../codecs/MPEG4Codec';
import { OGGCodec } from '../codecs/OGGCodec';

export class VideoConversionFacade implements IVideoConverter {
  constructor(
    private audioExtractor: IAudioExtractor,
    private compressor: IVideoCompressor,
    private bitrateReader: IBitrateReader
  ) {}

  private createFile(name: string, codec: string): IVideoFile {
    return new VideoFile(name, codec, 0);
  }

  private getCodec(format: string): ICodec {
    if (format.toLowerCase() === 'mp4') {
      return new MPEG4Codec();
    }
    return new OGGCodec();
  }

  public convert(filename: string, format: string): string {
    console.log(`VideoConversionFacade: conversion started.`);
    const file = this.createFile(filename, format);
    const sourceCodec = this.getCodec(file.codec);
    const destinationCodec = this.getCodec(format);
    
    let buffer = sourceCodec.decode(Buffer.from([]));
    let audioBuffer = this.audioExtractor.extract(file);
    
    const bitrate = this.bitrateReader.read(file);
    buffer = this.compressor.compress(buffer, bitrate);
    
    const result = destinationCodec.encode(buffer);
    console.log(`VideoConversionFacade: conversion completed.`);
    
    return `${filename}.${format}`;
  }
} 