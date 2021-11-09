export class SeriesRequest {
  title: string;

  grade: number;

  comment?: string;

  constructor(title: string, grade: number, comment?: string) {
    this.title = title;
    this.grade = grade;
    this.comment = comment;
  }
}
