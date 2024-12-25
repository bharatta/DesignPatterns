import { IVideoFile } from '../interfaces';

export class VideoFile implements IVideoFile {
  constructor(
    public name: string,
    public codec: string,
    public duration: number
  ) {}
} 