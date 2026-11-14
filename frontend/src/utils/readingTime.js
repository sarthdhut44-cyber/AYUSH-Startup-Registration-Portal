/**
 * Calculates estimated reading time in minutes for text.
 * Average reading speed: 200 words per minute.
 */
export function calculateReadingTime(text = '', wordsPerMinute = 200) {
  if (!text || typeof text !== 'string') return 1;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
}

export function formatReadingTime(minutes) {
  return `${minutes} min read`;
}
