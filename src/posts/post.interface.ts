export interface IPost {
  readonly where?: {
    slug: string;
  };
  readonly data: {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly title: string;
    readonly slug: string;
    readonly body: string;
    readonly published: boolean;
  };
}
