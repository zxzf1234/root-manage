export function truncateFileName(filename, maxLength = 19) {
  const extension = getFileExtension(filename).toLowerCase()
  const nameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'))
  const actualMaxLength = maxLength - extension.length - 3 // 减去后缀名长度和省略号长度

  if (getActualLength(nameWithoutExtension) <= actualMaxLength) {
    return filename
  }

  let truncatedName = ''
  let currentLength = 0

  for (let i = 0; i < nameWithoutExtension.length; i++) {
    if (/[\u0000-\u00ff]/.test(nameWithoutExtension[i])) {
      currentLength += 1 // 英文字符
    } else {
      currentLength += 2 // 中文字符
    }

    if (currentLength > actualMaxLength) {
      break
    }
    truncatedName += nameWithoutExtension[i]
  }

  return `${truncatedName}...${extension}`
}

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)
}

function getActualLength(str) {
  let length = 0
  for (let i = 0; i < str.length; i++) {
    if (/[\u0000-\u00ff]/.test(str[i])) {
      length += 1 // 英文字符
    } else {
      length += 2 // 中文字符
    }
  }
  return length
}

export function convertFileIcon(fileName) {
  if (fileName.indexOf('.') >= 0) {
    const fileType = fileName.substring(fileName.lastIndexOf('.') + 1).toLocaleLowerCase()
    // excel
    if (['xls', 'xlsx', 'xlsm', 'xlsb', 'sltx', 'xltm', 'xlam', 'csv'].includes(fileType)) {
      return 'vscode-icons:file-type-excel2'
    }
    // word
    if (['docx', 'doc', 'dotx', 'dotm'].includes(fileType)) {
      return 'vscode-icons:file-type-word2'
    }
    // ppt
    if (['pptx', 'ppt', 'pptm', 'potx', 'potm', 'ppsx', 'ppsm'].includes(fileType)) {
      return 'vscode-icons:file-type-powerpoint2'
    }
    // outlook
    if (['pst', 'ost', 'msg', 'eml'].includes(fileType)) {
      return 'vscode-icons:file-type-outlook'
    }
    // access
    if (['accdb', 'mdb', 'accde', 'mde'].includes(fileType)) {
      return 'vscode-icons:file-type-access2'
    }
    // 压缩包
    if (['rar', 'zip', '7z'].includes(fileType)) {
      return 'vscode-icons:file-type-zip'
    }
    // pdf
    if (['pdf'].includes(fileType)) {
      return 'vscode-icons:file-type-pdf2'
    }
    // text
    if (['txt', 'rtf'].includes(fileType)) {
      return 'vscode-icons:file-type-text'
    }
    // markdown
    if (['md'].includes(fileType)) {
      return 'vscode-icons:file-type-markdown'
    }
    // video
    if (
      [
        'mp4',
        'avi',
        'mov‌',
        'wmv‌',
        'mkv‌',
        'flv‌',
        'm4v‌',
        'mpeg‌',
        'mpg‌',
        'rmvb‌',
        'vob‌'
      ].includes(fileType)
    ) {
      return 'vscode-icons:file-type-video'
    }
    // audio
    if (
      ['wma', 'wav', 'mp3', 'aiff', 'cd', 'au', 'ape', 'aac', 'midi', 'vqf', 'ra'].includes(
        fileType
      )
    ) {
      return 'vscode-icons:file-type-audio'
    }
    // image
    if (['bmp', 'gif', 'jpg', 'pic', 'png', 'tif'].includes(fileType)) {
      return 'vscode-icons:file-type-image'
    }
  }
  return 'vscode-icons:default-file'
}

export function formatBytes(bytes) {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 B'

  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const converted = (bytes / Math.pow(1024, i)).toFixed(2) // 保留两位小数

  return `${converted} ${sizes[i]}`
}
