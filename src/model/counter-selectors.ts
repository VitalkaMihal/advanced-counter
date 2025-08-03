import type {RootState} from "../app/store.ts";
import type {DataType} from "./counter-reducer.ts";

export const selectCounter = (state: RootState): DataType => state.counter