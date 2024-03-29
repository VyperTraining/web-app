declare module '@metamask/jazzicon'

type TaskType = {
  status: number
  description: string
  owner: string
  taskId: BigNumber
}

type Children = ReactElement<any, any>
