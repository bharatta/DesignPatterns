export interface ICodec {
  type: string;
  encode(data: Buffer): Buffer;
  decode(data: Buffer): Buffer;
} 