export function ComingSoon({ page }: { page: string }) {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <p className="text-sm text-muted-foreground">{page} coming soon</p>
    </div>
  )
}
