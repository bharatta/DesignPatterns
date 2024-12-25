import { VideoConversionFacade } from './facades/VideoConversionFacade';
import { AudioExtractor } from './services/AudioExtractor';
import { VideoCompressor } from './services/VideoCompressor';
import { BitrateReader } from './services/BitrateReader';

export const runVideoConverterExample = (): void => {
  console.log('Video Converter Example:');

  // Initialize subsystems
  const audioExtractor = new AudioExtractor();
  const videoCompressor = new VideoCompressor();
  const bitrateReader = new BitrateReader();

  // Create facade
  const converter = new VideoConversionFacade(
    audioExtractor,
    videoCompressor,
    bitrateReader
  );

  // Simple client code
  console.log('\nConverting video to MP4:');
  const mp4Result = converter.convert('funny-cats.ogg', 'mp4');
  console.log(`Result: ${mp4Result}`);

  console.log('\nConverting video to OGG:');
  const oggResult = converter.convert('presentation.mp4', 'ogg');
  console.log(`Result: ${oggResult}`);
}; 