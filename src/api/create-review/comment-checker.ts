const FORBIDDEN_WORDS = ['injurious', 'crude'];

export class CommentChecker {
  check(comment: string) {
    return !FORBIDDEN_WORDS.some((forbiddenWord) =>
      comment.includes(forbiddenWord),
    );
  }
}
