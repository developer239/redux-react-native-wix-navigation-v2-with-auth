import { IAppStore } from '../../../reducer'

export const selectCounterValue = (state: IAppStore) => state.counter.value
