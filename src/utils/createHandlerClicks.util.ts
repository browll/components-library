const createHandlerClick =
  ({ onClick }: { onClick: (_event: any) => void }) =>
  (event: any) => {
    onClick(event)
  }

export default createHandlerClick
