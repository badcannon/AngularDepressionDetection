import { Action } from "@ngrx/store";
import { Result } from "src/app/shared/model/result";

export const FETCH_AUDIO_RESULT = "FETCH_AUDIO_RESULT";

export class FetchAudioResult implements Action {

  readonly type = FETCH_AUDIO_RESULT;
  constructor(public payload:Result){}

}
