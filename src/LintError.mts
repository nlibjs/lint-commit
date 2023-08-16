export class LintError extends Error {
  public readonly code: string;

  public constructor({ message, code }: { message: string; code: string }) {
    super(`${code}: ${message}`);
    this.code = code;
  }
}
