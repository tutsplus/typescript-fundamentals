export class Example {
  private _story: string;
  get story() { return this._story; }
  set story(newStory: string) { this._story = newStory; }
}


export { Example as Special };

export default Example;
