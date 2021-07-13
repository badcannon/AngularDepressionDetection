import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AudioEffects
{

    constructor(private actions$:Actions,http:HttpClient){}



}
