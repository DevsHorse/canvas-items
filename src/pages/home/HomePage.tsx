import { Canvas } from '@/widgets/canvas';
import { CanvasItemsList } from '@/widgets/canvasItemsList';
import { CanvasOperationsButtons } from '@/widgets/canvasOperationsButtons';

const HomePage = () => {
  return (
    <div className='container mx-auto p-5 flex flex-col gap-5 max-sm:pb-14'>
      <div className='border border-gray-300 bg-white z-10'>
        <Canvas />
      </div>
      <CanvasOperationsButtons />
      <CanvasItemsList />
    </div>
  );
};

export default HomePage;
