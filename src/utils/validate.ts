/**
 * is valid user name
 * @param {string} str
 * @return {boolean}
 */
export const isValidUsername = (str: string) => ['admin', 'editor'].indexOf(str.trim()) >= 0

/**
 * Is external
 * @param path
 * @return {boolean}
 */
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

/**
 * Is array
 * @param arg
 * @returns {arg is any[] | boolean}
 */
export const isArray = (arg: any) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * Is valid url
 * @param url
 * @returns {boolean}
 */
export const isValidURL = (url: string) => {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}
