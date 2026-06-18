import Button from '@/components/Button'
import { link } from '@/utils/link.js'

export const metadata = {
  title: 'Not found',
}

export default () => {
  return (
    <div className="container">
      <h1>Page not found</h1>
      <Button href={link('/')}>Home</Button>
    </div>
  )
}
