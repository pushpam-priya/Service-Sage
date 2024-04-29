export function getCSRFToken() {
    const csrfToken = document.cookie.match(/csrftoken=([^ ;]*)/);
    return csrfToken ? csrfToken[1] : null;
  }