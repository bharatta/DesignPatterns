import { ICodec } from '../interfaces';

export class MPEG4Codec implements ICodec {
  type = 'mp4';
  
  encode(data: Buffer): Buffer {
    console.log('Encoding video to MPEG4 format');
    return data;
  }

  decode(data: Buffer): Buffer {
    console.log('Decoding MPEG4 video');
    return data;
  }
} 