import { Cycle } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_NEW_CYCLE = 'INTERRUPT_NEW_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function addCurrentCycleAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function addInterruptCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_NEW_CYCLE,
  }
}
