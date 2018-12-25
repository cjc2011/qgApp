function getItem(key) {
  let result = localStorage.getItem(key)
  if (result) {
    result = result.charAt(0) == '{' ? JSON.parse(result) : result
    return result
  } else {
    return null
  }
}

const state = {
  title: '',
  publickey: getItem('publickey'),
  userinfo: getItem('userinfo')
}


export default state