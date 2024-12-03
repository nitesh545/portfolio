"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";

const services =[
	{num: '01', title: 'Frontend Dev', href: "https://www.linkedin.com/in/nitesh-sharma-developer/", description: 'A frontend developer who transforms complex digital challenges into elegant, intuitive web experiences. With a passion for crafting pixel-perfect interfaces and a deep understanding of modern web technologies, I don\'t just write code—I create digital solutions that seamlessly blend technical precision with user-centric design. My expertise spans React, Next.js, and advanced JavaScript frameworks, enabling me to build performant, responsive applications that not only meet but exceed user expectations. Whether you\'re a startup seeking innovative digital solutions or an established enterprise looking to elevate your web presence, I bring a strategic approach that turns technical requirements into compelling, interactive experiences. My commitment goes beyond writing clean, efficient code; I\'m dedicated to solving complex problems, optimizing performance, and delivering web applications that are both technically robust and visually stunning.'},
	// {num: '02', title: 'Fullstack Dev', href: "", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
	// {num: '03', title: 'UI/UX', href: "", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
	{num: '02', title: 'Game Dev', href: "https://cosmos545.itch.io/shi", description: 'A game developer who turns creative visions into compelling interactive experiences. With a deep understanding of game mechanics, programming, and design, I craft engaging worlds that captivate players and deliver memorable experiences. My technical expertise spans multiple game engines and programming languages, allowing me to tackle complex development challenges with precision and innovation. Whether you\'re a startup looking to bring a unique game concept to life or an established studio seeking specialized talent, I offer end-to-end development solutions that transform ideas into playable, market-ready games. My approach combines technical excellence with creative storytelling, ensuring each project not only meets technical specifications but also resonates emotionally with its target audience. I\'m passionate about pushing the boundaries of interactive entertainment and committed to delivering high-quality, immersive gaming experiences that stand out in a competitive market.'},
	// {num: '05', title: 'Game Assets', href: "", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
	// {num: '06', title: 'Logo Design', href: "", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
]

function Services(props) {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay:2.4, duration: 0.4, ease:"easeIn"},}}
					className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
				>
					{services.map((service, index) => {
						return(
							<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
								<div className="w-full flex justify-between items-center">
									<div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
										{service.num}
									</div>
									<Link href={service.href} target="_blank" rel="noopener noreferrer" className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
										<BsArrowDownRight className="text-primary text-3xl"/>
									</Link>
								</div>
								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
									{service.title}
								</h2>
								<p className="text-white/60">{service.description}</p>
								<div className="border-b border-white/80"></div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

export default Services;