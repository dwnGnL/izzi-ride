import { StaticImageData } from 'next/image';

export type Worker = {
  image: StaticImageData;
  about: string;
  name: string;
  position: string;
  location?: string;
  isFounder?: boolean;
};
