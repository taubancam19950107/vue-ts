// Helper functions

const getExtension = (filename: string) => {
  const parts = filename.split('.')
  return parts[parts.length - 1]
}

const isVideoFile = (filename: string) => {
  const ext = getExtension(filename)
  switch (ext.toLowerCase()) {
    case 'm4v':
    case 'avi':
    case 'mpg':
    case 'mp4':
      // etc
      return true
  }
  return false
}

export {
  getExtension,
  isVideoFile
}
