import { readFile } from 'react-native-fs';

export function readImageUri(uri) {
  return readFile(uri);
}
