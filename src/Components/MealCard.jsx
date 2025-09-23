const MealCard = ({ meal }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl text-orange-900 overflow-hidden">
      <img className="rounded-xl" src={meal.image} alt="" />
      <div className="px-4 py-2 space-y-2">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
          {meal.difficulty}
        </span>

        <div className="flex justify-between">
          <h2 className="text-xl font-semibold truncate max-w-[240px]">
            {meal.name}
          </h2>

          <p className="flex-shrink-0">
            ⭐ {meal.rating} ({meal.reviewCount})
          </p>
        </div>
        <p className="text-sm text-orange-500 font-bold">
          {meal.prepTimeMinutes + meal.cookTimeMinutes} MIN
        </p>
      </div>
    </div>
  );
};

export default MealCard;
