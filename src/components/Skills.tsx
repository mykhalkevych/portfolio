import { SkillType } from '../enums/SkillTypes';
import { ISkill } from '../interfaces/ISkill';
import { skills as skillItems } from '../mocks';

export const Skills = () => {
  const primarySkills: ISkill[] = skillItems.filter(
    (skill) => skill.type === SkillType.Primary
  );
  const secondarySkills: ISkill[] = skillItems.filter(
    (skill) => skill.type === SkillType.Secondary
  );
  const otherSkills: ISkill[] = skillItems.filter(
    (skill) => skill.type === SkillType.Others
  );

  return (
    <>
      <div className='flex gap-2 mt-2'>
        {primarySkills.map((skill) => (
          <span className='bg-teal-600 px-2.5 py-1 rounded-2xl bg-opacity-35 text-sm'>
            {skill.title}
          </span>
        ))}
      </div>
      <div className='flex gap-2 mt-2'>
        {secondarySkills.map((skill) => (
          <span className='bg-teal-600 px-2.5 py-1 rounded-2xl bg-opacity-35 text-sm'>
            {skill.title}
          </span>
        ))}
      </div>
      <div className='flex gap-2 mt-2'>
        {otherSkills.map((skill) => (
          <span className='bg-teal-600 px-2.5 py-1 rounded-2xl bg-opacity-35 text-sm'>
            {skill.title}
          </span>
        ))}
      </div>
    </>
  );
};
