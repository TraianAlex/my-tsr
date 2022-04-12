import { LinkIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
// import { useTypeWritting } from '../utils/hooks/useTypeWritting';
import { SlideOver } from '../layout/slide-over';
import { Hoc1 } from './hoc/hoc1';
import { Hoc2 } from './hoc/hoc2';

// const words = [
//   'Web Development',
//   'React',
//   'Typescript',
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
// ];

export const Home: React.FC = () => {
  const [open, setOpen] = useState(true);
  // const text = useTypeWritting(words); // prop in slider text={text}

  return (
    <Container>
      <SlideOver open={open} setOpen={setOpen} />
      <span className="hidden sm:block ml-3 mt-2 mb-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <LinkIcon
            className="-ml-1 mr-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          View Panel
        </button>
      </span>
      {/* <h5>{text}</h5> */}
      <div className="hoc">
        <Hoc1 />
        <Hoc2 />
      </div>
    </Container>
  );
};
