import { StarIcon } from '@heroicons/react/24/outline';

export default function CourseCard({ category, title, instructor, rating, reviews, price }) {
  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex flex-col h-full hover:border-yellow-400 transition-colors">
      <div className="h-32 bg-gradient-to-br from-yellow-300 to-orange-400 relative p-3 shrink-0">
        <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded">
          Top Course
        </span>
      </div>
      <div className="p-4 bg-gray-100 flex flex-col flex-1">
        <p className="text-orange-500 text-[10px] font-bold mb-1 uppercase tracking-wider">{category}</p>
        <h3 className="font-bold text-sm mb-2 leading-snug line-clamp-2">{title}</h3>
        <p className="text-[10px] text-gray-500 mb-3">{instructor}</p>
        
        <div className="mt-auto">
          <div className="text-yellow-500 text-xs mb-3 font-bold flex items-center gap-1">
            {rating} <StarIcon className="w-3 h-3" /> <span className="text-gray-400 font-normal">({reviews})</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-black text-lg">${price}</span>
            <button className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded hover:bg-gray-800 transition-colors">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}