import IonIcon from '@reacticons/ionicons';

interface Props {
  setAddClassModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClassFormModal = ({ setAddClassModal }: Props) => {
  return (
    <div className='absolute flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-50'>
      <div className='w-1/3 bg-gray-800 rounded py-6 px-6'>
        <div className='flex justify-between items-center pb-4 border-b'>
          <p className='text-xl'>Create Class</p>
          <div
            className='flex items-center text-3xl hover:bg-gray-700 rounded-full p-1 cursor-pointer'
            onClick={() => setAddClassModal(false)}
          >
            <IonIcon name='close-outline'></IonIcon>
          </div>
        </div>
        <form action='' className=' flex flex-col space-y-8 mt-4'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name (Required)'
              required
              className='rounded py-3 px-2 bg-white text-black placeholder-black outline-none'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='section'>Section</label>
            <input
              type='text'
              id='section'
              name='section'
              placeholder='Section...'
              className='rounded py-3 px-2 bg-white text-black placeholder-black outline-none'
            />
          </div>
          <div className='flex justify-end space-x-4'>
            <button
              className=' text-white px-4 py-2 rounded hover:bg-gray-400'
              onClick={() => setAddClassModal(false)}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-white text-black px-4 py-2 rounded'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassFormModal;
