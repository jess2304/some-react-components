import React from "react";
export default function ContenuModal({ closeModal }) {
  return (
    <div
      className="fixed inset-0 bg-slate-800/75 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="bg-slate-300 p-10 rounded relative mb-[10vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 rounded flex justify-center items-ceter"
        >
          X
        </button>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas amet
          reprehenderit molestiae dolore accusantium eveniet quisquam ducimus?
          Ab, sequi vero, soluta maiores iste magni dolorum voluptatum
          aspernatur assumenda voluptatem reprehenderit.
        </p>
      </div>
    </div>
  );
}
