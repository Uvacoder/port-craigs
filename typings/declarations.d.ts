declare module '*.css' {
  const content: { [className: string]: string }
  export = content
}

declare module 'react-markdown/with-html'
