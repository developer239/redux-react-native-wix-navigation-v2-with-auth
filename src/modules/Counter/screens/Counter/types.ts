export interface IProps {
  counterValue: number
  dispatchIncrementCounter: () => void
  dispatchDecrementCounter: () => void
  dispatchClearCounter: () => void
  componentId: string
}
