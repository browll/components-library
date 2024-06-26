import path from 'path'

export default {
  resolveSnapshotPath: (testPath) => {
    const fileName = path.basename(testPath)
    const fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/, '')
    const modifiedFileName = `${fileNameWithoutExtension}.snap`

    return path.join('./test/__snapshots__', modifiedFileName)
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    path.basename(snapshotFilePath, snapshotExtension),
  testPathForConsistencyCheck: 'example',
}
