
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

/**
 * All placeholder images in the app should only come from the JSON file.
 * We ensure data is correctly typed and handled to avoid hydration errors.
 */
export const PlaceHolderImages: ImagePlaceholder[] = (data as any)?.placeholderImages || [];
