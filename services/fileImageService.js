import { FileSystem } from 'expo';

export function readImageUri(uri) {
  return FileSystem.readAsStringAsync(uri);
}
