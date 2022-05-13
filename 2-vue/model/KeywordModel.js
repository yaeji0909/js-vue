export default {
  data: [
    {keyword: '러시안블루'}, 
    {keyword: '치즈'}, 
    {keyword: '오드아이'}, 
    {keyword: '고등어'}
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}
