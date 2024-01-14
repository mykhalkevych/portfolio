import { IProject } from '../interfaces';

export const ProjectItem = (props: IProject) => {
  return <div className={props.name}>ProjectItem</div>;
};
