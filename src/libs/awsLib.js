import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;
// unique file name, could change for something more robust
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });
// the vault stores into peronal archive, if you want public ommit vault
  return stored.key;
}
