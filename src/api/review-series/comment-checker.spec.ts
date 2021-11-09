import { CommentChecker } from './comment-checker';

it('should return true if no forbidden word', () => {
  const comment = 'This is a valid comment';

  const isValid = new CommentChecker().check(comment);

  expect(isValid).toBeTruthy();
});

it('should return true if no forbidden word', () => {
  const comment = 'This is a crude comment';

  const isValid = new CommentChecker().check(comment);

  expect(isValid).toBeFalsy();
});
