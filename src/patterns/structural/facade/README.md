# Video Conversion System - Facade Pattern Example

## Overview
This example demonstrates the Facade pattern by implementing a video conversion system that simplifies complex video processing operations into a single interface.

## Structure
```
video-conversion/
├── interfaces/        # Contracts for all components
├── models/           # Data models
├── codecs/           # Video codec implementations
├── services/         # Core services
├── facades/          # Main facade
└── __tests__/        # Test files
```

## Components

### Interfaces
- `IVideoFile`: Video file properties
- `ICodec`: Video codec operations
- `IAudioExtractor`: Audio extraction operations
- `IVideoCompressor`: Video compression operations
- `IBitrateReader`: Bitrate reading operations
- `IVideoConverter`: Main conversion operations

### Models
- `VideoFile`: Implements video file properties

### Codecs
- `MPEG4Codec`: Handles MP4 format
- `OGGCodec`: Handles OGG format

### Services
- `AudioExtractor`: Extracts audio from video
- `VideoCompressor`: Compresses video data
- `BitrateReader`: Reads video bitrate

### Facade
- `VideoConversionFacade`: Simplifies video conversion process

## Usage Example
```typescript
// Initialize components
const audioExtractor = new AudioExtractor();
const videoCompressor = new VideoCompressor();
const bitrateReader = new BitrateReader();

// Create facade
const converter = new VideoConversionFacade(
  audioExtractor,
  videoCompressor,
  bitrateReader
);

// Convert video
const result = converter.convert('video.mp4', 'ogg');
```

## SOLID Principles Applied

### Single Responsibility Principle
- Each class has one specific responsibility
- Services are separated into distinct classes

### Open/Closed Principle
- New codecs can be added without modifying existing code
- New services can be added by implementing interfaces

### Liskov Substitution Principle
- All codec implementations are interchangeable
- All service implementations can be substituted

### Interface Segregation Principle
- Interfaces are specific to each component's needs
- No component is forced to implement unnecessary methods

### Dependency Inversion Principle
- High-level modules depend on abstractions
- Dependencies are injected through constructor

## Testing
```bash
# Run all tests
npm test -- video-conversion

# Run specific test
npm test -- video-converter.test.ts
```

## Adding New Features

### Adding New Codec
1. Create new codec class in `codecs/`
2. Implement `ICodec` interface
3. Add codec to `VideoConversionFacade`

### Adding New Service
1. Define interface in `interfaces/`
2. Implement service in `services/`
3. Inject into facade if needed

## Benefits
- Simplified client interface
- Decoupled subsystems
- Easy to extend
- Maintainable code structure
- Clear separation of concerns

## Limitations
- May hide useful complexity
- Additional layer of abstraction
- Potential performance overhead 