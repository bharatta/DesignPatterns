import { VideoConversionFacade } from '../facades/VideoConversionFacade';
import { AudioExtractor } from '../services/AudioExtractor';
import { VideoCompressor } from '../services/VideoCompressor';
import { BitrateReader } from '../services/BitrateReader';
import { MPEG4Codec } from '../codecs/MPEG4Codec';
import { OGGCodec } from '../codecs/OGGCodec';

describe('Video Conversion System', () => {
  let facade: VideoConversionFacade;
  let audioExtractor: AudioExtractor;
  let videoCompressor: VideoCompressor;
  let bitrateReader: BitrateReader;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    audioExtractor = new AudioExtractor();
    videoCompressor = new VideoCompressor();
    bitrateReader = new BitrateReader();
    facade = new VideoConversionFacade(audioExtractor, videoCompressor, bitrateReader);
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('VideoConversionFacade', () => {
    it('should convert video to MP4', () => {
      const result = facade.convert('video.ogg', 'mp4');
      
      expect(result).toBe('video.ogg.mp4');
      expect(consoleSpy).toHaveBeenCalledWith('VideoConversionFacade: conversion started.');
      expect(consoleSpy).toHaveBeenCalledWith('VideoConversionFacade: conversion completed.');
    });

    it('should convert video to OGG', () => {
      const result = facade.convert('video.mp4', 'ogg');
      
      expect(result).toBe('video.mp4.ogg');
      expect(consoleSpy).toHaveBeenCalledWith('VideoConversionFacade: conversion started.');
      expect(consoleSpy).toHaveBeenCalledWith('VideoConversionFacade: conversion completed.');
    });
  });

  describe('Subsystems', () => {
    it('should use AudioExtractor correctly', () => {
      const extractSpy = jest.spyOn(audioExtractor, 'extract');
      facade.convert('video.mp4', 'ogg');
      expect(extractSpy).toHaveBeenCalled();
    });

    it('should use VideoCompressor correctly', () => {
      const compressSpy = jest.spyOn(videoCompressor, 'compress');
      facade.convert('video.mp4', 'ogg');
      expect(compressSpy).toHaveBeenCalled();
    });

    it('should use BitrateReader correctly', () => {
      const bitrateSpy = jest.spyOn(bitrateReader, 'read');
      facade.convert('video.mp4', 'ogg');
      expect(bitrateSpy).toHaveBeenCalled();
    });
  });

  describe('Codecs', () => {
    it('should handle MPEG4 codec operations', () => {
      const codec = new MPEG4Codec();
      const data = Buffer.from([]);
      
      codec.encode(data);
      expect(consoleSpy).toHaveBeenCalledWith('Encoding video to MPEG4 format');
      
      codec.decode(data);
      expect(consoleSpy).toHaveBeenCalledWith('Decoding MPEG4 video');
    });

    it('should handle OGG codec operations', () => {
      const codec = new OGGCodec();
      const data = Buffer.from([]);
      
      codec.encode(data);
      expect(consoleSpy).toHaveBeenCalledWith('Encoding video to OGG format');
      
      codec.decode(data);
      expect(consoleSpy).toHaveBeenCalledWith('Decoding OGG video');
    });
  });
}); 