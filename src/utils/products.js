// Links from the product data are used only if they are real https URLs.
// Placeholders like '#' or an empty string mean "not set yet",
// and anything else (http:, javascript:, typos) is never rendered as a link.
function httpsUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

export const getStoreUrl = (product) => httpsUrl(product.storeUrl);
export const getTesterUrl = (product) => httpsUrl(product.testerUrl);

// The one main button for a product: the store once it's published, the tester
// signup while it's in a closed test, otherwise nothing.
export function getPrimaryAction(product) {
  const storeUrl = getStoreUrl(product);
  if (storeUrl) return { href: storeUrl, label: 'Get on Google Play' };
  const testerUrl = getTesterUrl(product);
  if (testerUrl) return { href: testerUrl, label: 'Join the test' };
  return null;
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
  product.previews?.forEach((preview) => preloadImage(preview.src));
}
