export interface IIncrementCounter {
  type: 'app/counter/INCREMENT_COUNTER'
}

export interface IDecrementCounter {
  type: 'app/counter/DECREMENT_COUNTER'
}

export interface IClearCounter {
  type: 'app/counter/RESET_COUNTER'
}

export type ICounterActions = IIncrementCounter | IDecrementCounter | IClearCounter;
