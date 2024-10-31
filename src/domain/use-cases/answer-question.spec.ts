import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase();
  const answer = answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "New answer",
  });

  expect(answer.content).toEqual("New answer");
});
