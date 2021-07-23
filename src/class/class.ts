export class botInfos {
  readonly name?: string;
  readonly guildSize?: number;
  readonly id?: string;

  constructor(name?: string, guildSize?: number, id?: string) {
    this.name = name;
    this.guildSize = guildSize;
    this.id = id;
  }
}
