export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='#' className='group flex items-center inline-block'>
            <span className='w-8 h-0.5 bg-white mr-3 transition-all group-hover:w-16'></span>
            About
          </a>
        </li>
        <li>
          <a href='#' className='group flex items-center inline-block'>
            <span className='w-8 h-0.5 bg-white mr-3 transition-all group-hover:w-16'></span>
            Experience
          </a>
        </li>
        <li>
          <a href='#' className='group flex items-center inline-block'>
            <span className='w-8 h-0.5 bg-white mr-3 transition-all group-hover:w-16'></span>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};
