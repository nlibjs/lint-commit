import type { ThrowsExpectation } from "ava";
import ava from "ava";
import { parseSubjectLine } from "./parseSubjectLine.mjs";
import type { MessageConfig } from "./types.mjs";

interface Case {
	input: string;
	expected: ReturnType<typeof parseSubjectLine>;
}

const cases: Array<Case> = [
	{
		input: "chore: subject",
		expected: {
			type: "chore",
			scope: null,
			subject: "subject",
		},
	},
	{
		input: "chore(scope): subject",
		expected: {
			type: "chore",
			scope: "scope",
			subject: "subject",
		},
	},
	{
		input: "feat: 日本語の件名 🌱",
		expected: {
			type: "feat",
			scope: null,
			subject: "日本語の件名 🌱",
		},
	},
];

for (const { input, expected } of cases) {
	ava(`${input} → ${JSON.stringify(expected)}`, (t) => {
		t.deepEqual(parseSubjectLine(input), expected);
	});
}

interface ErrorCase {
	input: string;
	config?: Partial<MessageConfig>;
	expected: ThrowsExpectation<Error>;
}

const errorCases: Array<ErrorCase> = [
	{
		input: "feat: ",
		expected: { code: "NoSubject" },
	},
	...["feat:  ", "feat: \t", "feat:  subject", "feat: subject\nbody"].map(
		(input) => ({
			input,
			expected: { code: "InvalidSubject" },
		}),
	),
	{
		input: "chore subject",
		expected: { code: "NoCommitType" },
	},
	{
		input: "c: subject",
		expected: { code: "InvaildCommitType" },
	},
	{
		input: "chore(scope: subject",
		expected: { code: "UnclosedParenthesis" },
	},
	{
		input: "chore(scope ): subject",
		expected: { code: "InvaildCommitScope" },
	},
	{
		input: "chore(scope) subject",
		expected: { code: "NoColon" },
	},
	{
		input: "chore(scope):subject",
		expected: { code: "NoSpaceBeforeSubject" },
	},
	{
		input: "chore(scope): B",
		config: { subject: /^A/ },
		expected: { code: "InvalidSubject" },
	},
];

for (const { input, expected, config } of errorCases) {
	ava(`${JSON.stringify(input)} → ${JSON.stringify(expected)}`, (t) => {
		t.throws(() => parseSubjectLine(input, config), expected);
	});
}
