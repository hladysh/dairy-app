export class Item {
  constructor(
    public name: string,
    public totalComment: number,
    public coments: {
      text: string,
      color: string,
    },
    public id?: number
  ) {
  }
}
