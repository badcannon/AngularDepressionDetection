
import { Action, ActionReducerMap } from "@ngrx/store";
import * as fromTestAudioReducer from "../test-audio/test-audio-store/test-audio.reducer";

export interface AppState{
  audioStore: fromTestAudioReducer.State
}

export const reducers:ActionReducerMap<AppState,Action> = {
  audioStore: fromTestAudioReducer.TestAudioReducer,
}
