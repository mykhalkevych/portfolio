import { ISkill } from '../interfaces/ISkill';
import { skills as skillItems } from '../mocks';

export const Skills = () => {
  const skills: ISkill[] = skillItems;

  return (
    <div className='flex gap-2'>
      {skills.map((skill) => (
        <span className='bg-teal-600 px-2.5 py-1 rounded-2xl bg-opacity-35 text-sm'>
          {' '}
          {skill.title}
        </span>
      ))}
    </div>
  );
};
