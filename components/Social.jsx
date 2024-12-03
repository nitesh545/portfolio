import Link from 'next/link';
import {FaGithub, FaLinkedin, FaItchIo} from 'react-icons/fa';

const socials = [
	{icon: <FaLinkedin />, path: "https://www.linkedin.com/in/nitesh-sharma-developer/"},
	{icon: <FaGithub />, path: "https://github.com/nitesh545"},
	// {icon: <FaItchIo />, path: ""}
]

function Social({containerStyles, iconStyles}) {
	return (
		<div className={containerStyles}>
			{socials.map((social, index) => {
				return (
					<Link key={index} href={social.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
						{social.icon}
					</Link>
				);
			})}
		</div>
	);
}

export default Social;