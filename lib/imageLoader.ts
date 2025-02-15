export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/Satyam_Portfolio' : '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
} 