// Returns the product's store link only if it is a real https URL.
// Placeholders like '#' or an empty string mean "not on the store yet",
// and anything else (http:, javascript:, typos) is never rendered as a link.
export function getStoreUrl(product) {
  try {
    const url = new URL(product.storeUrl);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

// Images we've already started loading. Holding on to the Image objects keeps
// them in the browser's memory cache, so the product page can show them at once.
const preloaded = new Map();

function preloadImage(src) {
  if (!src || preloaded.has(src)) return;
  const img = new Image();
  img.src = src;
  preloaded.set(src, img);
  img.decode?.().catch(() => {});
}

export function preloadProductImages(product) {
  preloadImage(product.icon);
  product.previews?.forEach(preloadImage);
}
