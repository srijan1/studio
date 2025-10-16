// This API route is not compatible with static export and should be removed or disabled.
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  type: 'image' | 'video';
  videoUrl?: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;