export interface IPost {
  readonly data: {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly title: string;
    readonly body: string;
    readonly published: boolean;
  };
}
