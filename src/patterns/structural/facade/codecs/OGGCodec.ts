import { ICodec } from '../interfaces';

export class OGGCodec implements ICodec {
  type = 'ogg';
  
  encode(data: Buffer): Buffer {
    console.log('Encoding video to OGG format');
    return data;
  }

  decode(data: Buffer): Buffer {
    console.log('Decoding OGG video');
    return data;
  }
} 