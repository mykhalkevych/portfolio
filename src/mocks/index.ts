import { SkillType } from '../enums/SkillTypes';
import { ISkill } from '../interfaces/ISkill';

export const skills: ISkill[] = [
  {
    title: 'JavaScript',
    type: SkillType.Primary,
  },
  {
    title: 'TypeScript',
    type: SkillType.Primary,
  },
  {
    title: 'Angular',
    type: SkillType.Primary,
  },
  {
    title: 'GIT',
    type: SkillType.Primary,
  },
  {
    title: 'React',
    type: SkillType.Secondary,
  },
  {
    title: 'Vue',
    type: SkillType.Secondary,
  },
  {
    title: 'Vuex',
    type: SkillType.Secondary,
  },
  {
    title: 'SCRUM',
    type: SkillType.Others,
  },
];
