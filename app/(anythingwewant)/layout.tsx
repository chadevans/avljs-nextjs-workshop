import { Button } from '@/components/button'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="m-12">
        <Button
          cta="Home"
          url="/"
        />
      </div>
      <div className="mx-24">
        <main>{children}</main>
      </div>
    </>
  )
}
