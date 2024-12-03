"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
	{
		icon:  <FaPhoneAlt />,
		title: "Phone",
		description: "+91 9682686871",
	},
	{
		icon:  <FaEnvelope />,
		title: "Email",
		description: "nitesh.sharma5549@gmail.com",
	},
	{
		icon:  <FaMapMarkerAlt />,
		title: "Address",
		description: "Pune, Maharashtra, 411057",
	},
]

import {motion} from "framer-motion";
import {useRef, useState} from "react";
import * as emailjs from "@emailjs/browser";

function Contact(props) {
	const [status, setStatus] = useState('');
	const formRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_jq1dvvi',
			'template_pxxj7kh',
			formRef.current,
			'Zgmb3xeYawrkanCrS'
		)
			.then((result) => {
				setStatus('Message sent successfully!');
				formRef.current.reset();
			}, (error) => {
				setStatus('Failed to send message');
			});
	};
	return (
		<motion.section
			initial={{opacity: 0}}
			animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Let's work together</h3>
							<p className="text-white/60">I turn visionary ideas into interactive realities that push the boundaries of what's possible. With a blend of technical skills and creative passion, I don't just develop code — I craft experiences that inspire, engage, and revolutionize the digital landscape.</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input required type="firstname" name="first_name" placeholder="First Name" />
								<Input required type="lastName" name="last_name" placeholder="Last Name" />
								<Input required type="email" name="email" placeholder="Email Address" />
								<Input required type="phone" name="phone" placeholder="Phone Number" />
							</div>
							<Select name="selectedRole">
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="frontend">Frontend Development</SelectItem>
										<SelectItem value="fullstack">Fullstack Development</SelectItem>
										<SelectItem value="uxui">UI/UX Development</SelectItem>
										<SelectItem value="gamedev">Game Development</SelectItem>
										<SelectItem value="assets">Game Assets</SelectItem>
										<SelectItem value="logo">Logo Design</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<Textarea name="message" className="h-[200px]" placeholder="Type your message here."/>
							<Button type="submit" size="md" className="max-w-40 transition-all duration-500">Send message</Button>
							{status && <p>{status}</p>}
						</form>
					</div>
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
					<ul className="flex flex-col gap-10">
						{info.map((item, index) => {
							return (
								<li key={index} className="flex items-center gap-6">
									<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
										<div className="text-[28px]">{item.icon}</div>
									</div>
									<div className="flex-1">
										<p className="text-white/60">{item.title}</p>
										<h3 className="text-xl">{item.description}</h3>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				</div>
			</div>
		</motion.section>
	);
}

export default Contact;