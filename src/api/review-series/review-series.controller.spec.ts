import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ReviewSeriesController } from './review-series.controller';
import { CommentChecker } from './comment-checker';
import { ReviewSeriesRepository } from './review-series.repository';

let app: INestApplication;
let commentCheckerMock: CommentChecker;
let gradeSeriesRepositoryMock: ReviewSeriesRepository;

beforeEach(async () => {
  commentCheckerMock = {} as CommentChecker;
  commentCheckerMock.check = jest.fn().mockReturnValue(true);

  gradeSeriesRepositoryMock = {} as ReviewSeriesRepository;
  gradeSeriesRepositoryMock.save = jest.fn();

  const moduleFixture: TestingModule = await Test.createTestingModule({
    controllers: [ReviewSeriesController],
    providers: [CommentChecker, ReviewSeriesRepository],
  })
    .overrideProvider(CommentChecker)
    .useValue(commentCheckerMock)
    .overrideProvider(ReviewSeriesRepository)
    .useValue(gradeSeriesRepositoryMock)
    .compile();

  app = moduleFixture.createNestApplication();
  app.useGlobalPipes(new ValidationPipe());
  await app.init();
});

it('201 valid review with no comment', () => {
  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      title: 'Test',
      grade: 3,
    })
    .expect(201);
});

it('201 valid review with comment', () => {
  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      title: 'Test',
      grade: 3,
      comment: 'A comment',
    })
    .expect(201);
});

it('400 missing title', () => {
  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      grade: 3,
    })
    .expect(400);
});

it('400 empty title', () => {
  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      title: '',
      grade: 3,
    })
    .expect(400);
});

it('400 missing grade', () => {
  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      title: 'Test',
    })
    .expect(400);
});

it('400 grade lower than 0', () => {
  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      title: 'Test',
      grade: -1,
      comment: 'A comment',
    })
    .expect(400);
});

it('400 grade greater than 5', () => {
  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      title: 'Test',
      grade: 6,
      comment: 'A comment',
    })
    .expect(400);
});

it('400 empty comment', () => {
  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      title: 'Test',
      grade: 3,
      comment: '',
    })
    .expect(400);
});

it('400 invalid comment', () => {
  commentCheckerMock.check = jest.fn().mockReturnValue(false);

  return request(app.getHttpServer())
    .post('/series/reviews')
    .send({
      title: 'Test',
      grade: 3,
      comment: 'An invalid comment',
    })
    .expect(400);
});
