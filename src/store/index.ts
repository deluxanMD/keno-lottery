import {createContext, useContext} from 'react';
import {BettingStore} from './BettingStore';

export class RootStore {
  betting: BettingStore;

  constructor() {
    this.betting = new BettingStore();
  }
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
