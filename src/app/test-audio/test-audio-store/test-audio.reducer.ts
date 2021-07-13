import { Action } from "@ngrx/store";
import { Result } from "src/app/shared/model/result";
import * as TestAudioActions from "./test-audio.actions";

export interface State {
  result: Result;
}

const initalState:State = {
  result:new Result(false,"0%")
};

export function TestAudioReducer(state:State = initalState,action:Action)
{
  switch (action.type)
  {
    case TestAudioActions.FETCH_AUDIO_RESULT:
      return {...state}

    default:
      return {...state}
  }
}
