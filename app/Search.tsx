import {
  MicrophoneIcon,
  MusicalNoteIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";


export default function search() {
  return (
    <form className="flex flex-col items-center mt-44 flex-grow">
      <div className="flex flex-col w=1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-1">
        <MusicalNoteIcon className="h-8 w-8 text-blue-500" />
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text">
          Scores
        </h1>
      </div>
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 item-center sm:max-w-xl lg:max-w-2xl">
        <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
        <input type="text" className="flex-grow focus:outline-none" />
        <MicrophoneIcon className="h-5" />
      </div>
      <div className="flex flex-col w=1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button className="btn">Song Search</button>
        <button className="btn">I am Feeling lucky</button>
      </div>
    </form>
  );
}
