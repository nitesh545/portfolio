"use client";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaNodeJs,
	FaReact,
	FaFigma,
	FaRust,
	FaGit,
	FaBootstrap,
	FaLinux,
	FaGithub, FaPython, FaUikit, FaEnvelope, FaGamepad
} from "react-icons/fa";

import {
	SiTailwindcss,
	SiNextdotjs,
	SiUnrealengine,
	SiMaterialdesign,
	SiBevy,
	SiUnity,
	SiGamedeveloper, SiPlaystation
} from "react-icons/si";
import {Tabs, TabsContainer, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import {FaC} from "react-icons/fa6";

const about = {
	title: "About me",
	description: "Skilled Fullstack Developer with 2+ years of experience in building responsive, cross-browser compatible web " +
		"applications using React, JavaScript, and modern web technologies. Proven track record of optimizing web performance and " +
		"contributing to increased client conversions through user-friendly interfaces.",
	info: [
		{fieldName: "Name", fieldValue: "Nitesh Sharma"},
		{fieldName: "Phone", fieldValue: "+91 9682696871"},
		{fieldName: "Experience", fieldValue: "2.5+ years"},
		{fieldName: "GitHub", fieldValue: "github.com/nitesh545"},
		{fieldName: "Nationality", fieldValue: "India"},
		{fieldName: "Freelance", fieldValue: "Available"},
		{fieldName: "Languages", fieldValue: "English, Hindi"},
		{fieldName: "LinkedIn", fieldValue: "linkedin.com/in/nitesh-sharma-developer"},
		{fieldName: "Email", fieldValue: "nitesh.sharma5549@gmail.com"},
	]
}

const experience = {
	icon: '',
	title: 'My Experience',
	description: "",
	items: [
		{company: "Phoenix Consultant", position: "Freelance Frontend Developer", duration: 'Aug 2024 - Oct 2024'},
		{company: "Volkswagen Group India", position: 'Developer', duration: 'Aug 2022 - Jul 2024'},
		{company: "DesaniXR", position: 'Game Developer Internship', duration: 'Dec 2021 - Apr 2022'},
	]
}

const education = {
	icon: '',
	title: "My Education",
	description: "",
	items: [
		{institution: "Crio - Online Course Platform", degree: "Full Stack Web Development Bootcamp", duration: "2023-2024"},
		{institution: "AISSMS IOIT", degree: "B.E. in C.S.E.", duration: "2018-2022"},
		{institution: "Army Public School", degree: "H.S.C.", duration: "2015-2017"},
		{institution: "Army Public School", degree: "S.S.C.", duration: "2013-2015"},
	]
}

const skills = {
	title: "My Skills",
	description: "",
	skillList: [
		{icon: <FaHtml5/>, name: "HTML5"},
		{icon: <FaCss3/>, name: "CSS3"},
		{icon: <FaReact/>, name: "React"},
		{icon: <SiNextdotjs/>, name: "Next"},
		{icon: <FaJs/>, name: "Javascript"},
		{icon: <FaRust />, name: "Rust"},
		{icon: <FaPython />, name: "Python"},
		{icon: <FaC />, name: "C++"},
		{icon: <SiTailwindcss/>, name: "Tailwind CSS"},
		{icon: <FaUikit />, name: "Material UI"},
		{icon: <FaBootstrap />, name: "Bootstrap"},
		{icon: <FaFigma/>, name: "Figma"},
		{icon: <FaGithub />, name: "GitHub"},
		{icon: <FaLinux />, name: "Linux"},
		{icon: <FaNodeJs/>, name: "Node.js"},
		{icon: <FaGamepad/>, name: "Game Engine Programming"},
		{icon: <SiBevy/>, name: "Bevy"},
		{icon: <SiUnrealengine/>, name: "Unreal Engine 5"},
		{icon: <SiUnity/>, name: "Unity"},
	]
}

function Resume(props) {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{
				opacity: 1,
				transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About Me</TabsTrigger>
					</TabsList>

					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return(
												<li key={index} className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											);}
										)}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
												return (
													<li key={index}
														className="bg-[#232339] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
														<span className="text-accent">{item.duration}</span>
														<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
														<div className="flex items-center gap-3">
															<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
															<p className="text-white/60">{item.duration}</p>
														</div>
													</li>
												);
											}
										)}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value="skills" className="w-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
									{skills.skillList.map((item, index) => {
										return(
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{item.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
							</div>
							<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-x-20">
								{about.info.map((item, index) => {
									return(
										<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
											<span className="text-white/60">{item.fieldName}</span>
											<span className="text-xl">{item.fieldValue}</span>
										</li>
									);
								})}
							</ul>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
}

export default Resume;