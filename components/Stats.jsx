"use client";

import CountUp from "react-countup";

const stats = [
	{num:2, text: "Years of Experience"},
	{num:50, text: "Projects"},
	{num:20, text: "Products"},
	{num:1, text: "Freelance Projects"},
	{num:1, text: "Internships"},
	{num:15, text: "Technologies"},
]

function Stats(props) {
	return (
		<section>
			<div className="container mx-auto">
				<div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
					{stats.map((stat, index) => {
						return(
							<div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
								<CountUp end={stat.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
								<p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Stats;