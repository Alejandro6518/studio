import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

/**
 * All placeholder images in the app should only come from the JSON file.
 * This export ensures we always return an array to prevent 'find' errors.
 */
export const PlaceHolderImages: ImagePlaceholder[] = (data as any)?.placeholderImages || [];
