export function getImagePath(path: string): string {
  // Remove any leading slash from the path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, only add the basePath once
  const basePath = process.env.NODE_ENV === 'production' ? '/Satyam_Portfolio' : '';
  
  // Combine the paths, avoiding double slashes
  const finalPath = `${basePath}/${cleanPath}`.replace(/\/+/g, '/');
  
  // Debug log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Original path: ${path}`);
    console.log(`Final path: ${finalPath}`);
  }
  
  return finalPath;
} 