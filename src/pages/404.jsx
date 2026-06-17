import Button from '@/components/Button'

export const metadata = {
  title: 'Not found',
}

export default () => {
  return (
    <div className="container">
      <h1>Page not found</h1>
      <Button href="/">Home</Button>
    </div>
  )
}
