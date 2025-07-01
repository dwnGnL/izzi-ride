import { StaticImageData } from 'next/image';

type BaseWorker = {
  image: StaticImageData;
  about: string;
  name: string;
  position: string;
  location?: string;
};

export type Worker =
  | BaseWorker
  | {
      image: StaticImageData;
      about: string;
      name: string;
      position: string;
      location?: string;
      founderText: string;
      isFounder: boolean;
    };
