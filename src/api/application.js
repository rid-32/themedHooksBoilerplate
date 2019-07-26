export const fetchData = () =>
  new Promise(res => {
    setTimeout(() => {
      res('Hello, world')
    }, 200)
  })
