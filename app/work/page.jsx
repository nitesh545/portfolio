"use client";

import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
	{
		num: '01',
		category: 'frontend',
		title: 'Medify',
		description: "React-based web application that allows users to find medical centers in a specific state and city across the USA and book appointments.",
		stack: [{name: "React"}, {name: "JavaScript"}, {name: "Material UI"}, {name: "Figma"}],
		image: '/assets/work/thumb1.png',
		live: "https://x-medify-gamma.vercel.app/",
		github: "https://github.com/nitesh545/xMedify",
	},
	{
		num: '02',
		category: 'frontend',
		title: 'Phoenix Consultant',
		description: "Frontend design and solution for Phoenix Consultant, A Recruitment Consultancy since 1992.",
		stack: [{name: "HTML5"}, {name: "CSS3"}, {name: "JavaScript"}, {name: "React"}, {name: "Material UI"}],
		image: '/assets/work/thumb2.png',
		live: "https://phoenixconsultant.in/",
		github: "",
	},
	{
		num: '03',
		category: 'frontend',
		title: 'QKart',
		description: "QKart is an e-commerce application offering a variety of products for customers to choose from.",
		stack: [{name: "REST"}, {name: "JSON"}, {name: "JavaScript"}, {name: "React"}, {name: "Responsive"}],
		image: '/assets/work/thumb3.png',
		live: "https://qkart-dun.vercel.app/",
		github: "https://github.com/nitesh545/nitecse12457868-ME_QKART_FRONTEND_V2",
	},
	{
		num: '04',
		category: 'frontend',
		title: 'Qtify',
		description: "QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.",
		stack: [{name: "JavaScript"}, {name: "React"}, {name: "Flexbox"}, {name: "Swiper"}, {name: "Deployment"}],
		image: '/assets/work/thumb4.png',
		live: "https://l-square-q-tify-umber.vercel.app/",
		github: "https://github.com/nitesh545/L-square-QTify",
	},
	{
		num: '05',
		category: 'frontend',
		title: 'QTrip',
		description: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
		stack: [{name: "Responsive Design"}, {name: "Event Handling"}, {name: "Conditional Rendering"}, {name: "Bootstrap Carousel"}],
		image: '/assets/work/thumb10.png',
		live: "https://qtrip-dynamic-mauve-eight.vercel.app/",
		github: "https://github.com/CrioDo/nitecse12457868-ME_QTRIPDYNAMIC",
	},
	{
		num: '06',
		category: 'frontend',
		title: 'Bot AI',
		description: "An application where the user can chat with an AI model & give some feedback at each stage of the conversation.",
		stack: [{name: "React"}, {name: "Material UI"}, {name: "Figma"}, {name: "Debugging"}],
		image: '/assets/work/thumb11.png',
		live: "https://x-bot-ai-psi.vercel.app/",
		github: "https://github.com/nitesh545/xBotAI",
	},
	{
		num: '07',
		category: 'frontend',
		title: 'Expense Tracker',
		description: "An expense tracker is a tool for tracking expenses.",
		stack: [{name: "React"}, {name: "Material UI"}, {name: "Figma"}, {name: "Deployment"}],
		image: '/assets/work/thumb12.png',
		live: "https://xexpensetracker-5chvqcwg0-nitesh-sharmas-projects-f9e9f1e4.vercel.app/",
		github: "https://github.com/nitesh545/xexpensetracker",
	},
	{
		num: '08',
		category: 'Game Dev',
		title: 'Shi',
		description: "\"Shi\" is a high-octane space adventure that puts you in the cockpit of a sleek spaceship hurtling through a mesmerizing cosmic landscape. ",
		stack: [{name: "C++"}, {name: "UE5"}, {name: "Blueprints"}, {name: "Houdini"}, {name: "Blender"}],
		image: '/assets/work/thumb5.png',
		live: "https://cosmos545.itch.io/shi",
		github: "",
	},
	{
		num: '09',
		category: 'Game Dev',
		title: 'Turret Defender',
		description: "Apocalyptic world with only 1 remaining tower. Will you be able to protect? Play the game and find out.",
		stack: [{name: "UE5"}, {name: "C++"}, {name: "Houdini"}, {name: "Blueprints"}, {name: "Blender"}],
		image: '/assets/work/thumb6.png',
		live: "https://cosmos545.itch.io/turret-defender",
		github: "",
	},
	{
		num: '10',
		category: 'Game Dev',
		title: 'Ping Pong',
		description: "Ping pong is among the games from which gaming started. This is a version with decent graphics with 3 difficulty modes.",
		stack: [{name: "C++"}, {name: "UE5"}, {name: "Blueprints"}, {name: "Houdini"}, {name: "Blender"}],
		image: '/assets/work/thumb7.png',
		live: "https://cosmos545.itch.io/ping-pong",
		github: "",
	},
	{
		num: '11',
		category: 'Game Dev',
		title: 'Locked Room',
		description: "An infinite play style where you have to collect points to meet the boss.",
		stack: [{name: "UE5"}, {name: "C++"}, {name: "Houdini"}, {name: "Blueprints"}, {name: "Blender"}],
		image: '/assets/work/thumb8.png',
		live: "https://cosmos545.itch.io/locked-room",
		github: "",
	},
	{
		num: '12',
		category: 'Programming',
		title: 'Game Dev',
		description: "Artistic Space shooter.",
		stack: [{name: "Rust"}, {name: "Cargo"}, {name: "Debugging"}, {name: "Bevy"}, {name: "Krita"}, {name: "inkscape"}],
		image: '/assets/work/thumb12.jpg',
		live: "",
		github: "https://github.com/nitesh545/advent",
	},
	{
		num: '13',
		category: 'Programming',
		title: 'Game Engine',
		description: "My game engine - Brahmand. Crafted using rust, wgpu & egui. Leverages bevy_ecs for entity component system.",
		stack: [{name: "Rust"}, {name: "Cargo"}, {name: "Debugging"}, {name: "wgpu"}, {name: "winit"}, {name: "egui"}],
		image: '/assets/work/thumb9.jpg',
		live: "",
		github: "",
	},
]

function Work(props) {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	}

	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[450px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px]">
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
								{project.num} {project.title}
							</div>
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.category} Project
							</h2>
							<p className="text-white/60">{project.description}</p>
							<ul className="flex gap-4">
								{project.stack.map((item, i) => {
									return <li key={i} className="text-xl text-accent">
										{item.name}
										{i !== project.stack.length - 1 && ","}
									</li>;
								})}
							</ul>
							<div className="border border-white/20"></div>
							<div className="flex items-center gap-4">
								{project.live.length > 0 &&
									(<Link href={project.live} target="_blank" rel="noopener noreferrer">
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
									)}
								{project.github.length > 0 && (
								<Link href={project.github} target="_blank" rel="noopener noreferrer">
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>GitHub repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								)}
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
							{projects.map((item, i) => {
								return(
									<SwiperSlide key={i} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-transparent">
											<div className="absolute top-0 bottom-0 w-full h-full bg-transparent z-10"></div>
											<div className="relative flex w-full h-full">
												<Image src={project.image} fill className="object-cover rounded-3xl bg-transparent accent-transparent" alt="" />
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							<WorkSliderButtons
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 capitalize"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Work;
