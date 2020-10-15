/**
 * Get file extension
 * @param {string} filename - File name
 * @return string - File extension. ex: mp4
 */
export function getFileExtension (filename: string) {
  const parts = filename.split('.')
  return parts[parts.length - 1]
}

/**
 * Check file name is video
 * @param {string} filename - File name
 * @return boolean
 */
export function isVideoFile (filename: string) {
  const ext = getFileExtension(filename)
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
