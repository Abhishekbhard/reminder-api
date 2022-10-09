export default class {
  id: number;
  isComplete: boolean;
  constructor(public title: string) {
    this.id = Date.now();
    this.isComplete = false;
  }
}
