import React, { useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

function App() {
	const [meal, setMeal] = useState<string>('');
	const [meals, setMeals] = useState<(typeof meal)[]>([]);
	const [lunch, setLunch] = useState<string>('');
	const [isExploding, setIsExploding] = useState<boolean>(false);

	const { width, height } = useWindowSize();

	const categories = {
		fastFood: ['KFC', 'Mcdonalds', 'Subway', 'Long John Silvers', 'Popeyes'],
		hawker: [
			'Chicken Rice',
			'Duck Rice',
			'Mala Xiang Guo',
			'Pepper Lunch',
			'Cai Fan',
			'Zhi Char',
		],
		japanese: ['Tonkatsu', 'Sushi', 'Tori Q', 'Ramen'],
		western: ['Spaghetti', 'Chicken Chop', 'Pork Chop', 'Fish and Chips'],
	};

	const handleReset = () => {
		setMeals([]);
		setLunch('');
		setIsExploding(false);
	};

	const handleAddMeal = (e: React.FormEvent) => {
		// prevent the form submit event from refreshing the page
		e.preventDefault();
		setMeals([...meals, meal]);
		setMeal('');
	};

	const handleClickFastFood = () => {
		if (!meals.includes(categories.fastFood[0])) {
			setMeals([...meals, ...categories.fastFood]);
		}
	};

	const handleClickHawker = () => {
		if (!meals.includes(categories.hawker[0])) {
			setMeals([...meals, ...categories.hawker]);
		}
	};

	const handleClickJap = () => {
		if (!meals.includes(categories.japanese[0])) {
			setMeals([...meals, ...categories.japanese]);
		}
	};

	const handleClickWestern = () => {
		if (!meals.includes(categories.western[0])) {
			setMeals([...meals, ...categories.western]);
		}
	};

	const handleRandom = () => {
		if (meals.length > 0) {
			setLunch(meals[Math.floor(Math.random() * meals.length)]);
			setIsExploding(true);
		}
	};

	return (
		<div className="mt-20">
			<h1 className="text-3xl mb-10">What's for lunch?</h1>
			{isExploding && <Confetti width={width} height={height} />}

			{lunch && <h2 className="text-5xl mb-10">{lunch}</h2>}
			<h2 className="text-xl mt-5 mb-1">
				Pick the food category (can choose more than 1)
			</h2>
			<div className="flex flex-row justify-center">
				<h1 className="text-3xl"></h1>
				<button
					onClick={handleClickFastFood}
					className="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2 py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100"
				>
					Fast Food
				</button>
				<button
					onClick={handleClickHawker}
					className="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2 py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100"
				>
					Hawker
				</button>
				<button
					onClick={handleClickJap}
					className="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2 py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100"
				>
					Japanese
				</button>
				<button
					onClick={handleClickWestern}
					className="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2 py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100"
				>
					Western
				</button>
			</div>
			<div className="flex flex-row justify-center">
				<div className="p-8 px-12">
					<h2 className="text-xl">Custom Inputs</h2>
					<form className="mt-2" onSubmit={handleAddMeal}>
						<input
							className="rounded-xl p-2 text-sm"
							placeholder="add food item here"
							type="text"
							value={meal}
							onChange={(e) => setMeal(e.target.value)}
						/>
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2 py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100"
						>
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
							<span className="sr-only">Icon description</span>
						</button>
					</form>
					<div className="mt-10">
						<h1 className="text-xl">Randomize</h1>
						<button
							onClick={handleRandom}
							className="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2 py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100"
						>
							Ready? Let's go!
						</button>
					</div>
				</div>
				<div className="p-8 px-12">
					<h2 className="text-xl">Meal Pool</h2>
					<ul>
						{meals.map((ele, index) => {
							return <li key={index}>{ele}</li>;
						})}
					</ul>
					<button
						onClick={handleReset}
						className="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2 py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl hover:scale-105 ease-in duration-100"
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
