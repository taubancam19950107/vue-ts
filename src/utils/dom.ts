/**
 * Set document title
 * @returns void
 */
export function setDocumentTitle(title: string) {
  document.title = title
  const ua = navigator.userAgent
  // eslint-disable-next-line
  const regex = /\bMicroMessenger\/([\d\.]+)/
  if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    const i = document.createElement('iframe')
    i.src = '/favicon.png'
    i.style.display = 'none'
    i.onload = () => {
      setTimeout(() => {
        i.remove()
      }, 9)
    }
    document.body.appendChild(i)
  }
}

/**
 * Document title
 */
export const DOM_TITLE = 'App'
