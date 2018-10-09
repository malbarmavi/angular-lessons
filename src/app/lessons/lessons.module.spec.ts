import { LessonsModule } from './lessons.module';

describe('LessonsModule', () => {
  let lessonsModule: LessonsModule;

  beforeEach(() => {
    lessonsModule = new LessonsModule();
  });

  it('should create an instance', () => {
    expect(lessonsModule).toBeTruthy();
  });
});
