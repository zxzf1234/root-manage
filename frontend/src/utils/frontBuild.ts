/**
 * @param {string} jsonRule 需要转换的json
 */
export const jsonParseCode = (objectRule: object) => {
  if (objectRule === undefined) return ''
  if (!objectRule) return ''
  else {
    let code = ''
    code = objectParseCode(objectRule)
    return code
  }
}

const objectParseCode = (objectRule: object) => {
  const code = ''
  if (Object.keys(objectRule).length < 1) return ''

  for (const key in objectRule) {
    console.log(key + ': ' + objectRule[key])
    // if ('type' in objectRule) {
    //   code = code + '<' + objectRule['type']
    // } else {
    //   return ''
    // }
    // const func = (this as any)[objectRule['type'] as string]
    // if (typeof func === 'function') {
    //   func()
    // } else {
    //   console.log('Invalid function name')
    // }
    // code = code + '/>' + objectRule['type']
    // console.log(objectRule)
  }

  return code
}

export const input = () => {
  console.log('this is function input')
}
