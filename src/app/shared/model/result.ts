export class Result {
  prediction:boolean;
  accuracy:string;

  constructor(prediction:boolean,accuracy:string){
    this.prediction=  prediction;
    this.accuracy = accuracy
  }

}
