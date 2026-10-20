import PageHeader from '../components/PageHeader'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="wrap pb-20">
      <PageHeader eyebrow="404" title="Page not found">
        That route doesn’t exist.
      </PageHeader>
      <Button to="/">Back home</Button>
    </div>
  )
}
