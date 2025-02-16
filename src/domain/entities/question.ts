import { Slug } from "./value-objects/slug";
import { Entity } from "@/core/entities/entity";
import { Optional } from "@/core/entities/types/optional";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface QuestionProps {
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, "createdAt">,
    id?: UniqueEntityID
  ) {
    const question = new Question({ ...props, createdAt: new Date() }, id);
    return question;
  }
}
