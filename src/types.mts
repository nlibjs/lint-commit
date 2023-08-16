export type StringMatcher =
  | Array<string>
  | RegExp
  | ((input: string) => boolean);

export interface MessageConfig {
  readonly type: StringMatcher;
  readonly scope: StringMatcher;
  readonly subject: StringMatcher;
  readonly maxLength: number;
}

export interface ParseMessageResult {
  type: string;
  scope: string | null;
  subject: string;
  body?: string;
  error?: undefined;
}
