export const toggleTheme = () => {
  document.documentElement.classList.add('theme-transition')

  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'default' ? 'dark' : 'default'

  document.documentElement.setAttribute('data-theme', newTheme)

  setTimeout(function() {
    document.documentElement.classList.remove('theme-transition')
  }, 500)
}
