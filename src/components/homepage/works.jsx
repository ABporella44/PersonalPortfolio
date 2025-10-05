import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {

	const workExperice = [{
		imagSrc : "./techm.png",
		companyName : "Tech Mahindra",
		role : "Software Engineer",	
		workingPeriod : "JUN 2024 - Present"		
	},{
		imagSrc : "./cognitivzen.png",
		companyName : "cognitivzen Technologies",
		role : "Sr.Software Engineer",	
		workingPeriod : "JUN 2022 - JUN 2024"		
	},{
		imagSrc : "./snapper.jpeg",
		companyName : "Snapper IT",
		role : "Front End Developer",
		workingPeriod : "Aug 2020 - JUN 2022"			
	},{
		imagSrc : "./troy.png",
		companyName : "Troy IT Consultency",
		role : "React Developer",	
		workingPeriod : "APR 2022 -JUN 22"		
	},{
		imagSrc : "./kpt.jpeg",
		companyName : "Key Point Technologies",
		role : "React Developer",
		workingPeriod : "SEP 2021 -FEB 2022"			
	},{
		imagSrc : "./DWBI.jpeg",
		companyName : "DWBI services",
		role : "JR Front End Developer",	
		workingPeriod : "DEC 2018 -NOV 2019"
	}]

	return (
		<div className="works" style={{width:"100%"}}>
			<Card
				icon={faBriefcase}
				title="Work"
				sx = {{maxWidth:"100%"}}
				body={
				<div>
					<div className="works-body">
						{workExperice.map((work) => (
							<div className="work" key={work.companyName}>
								<div className="work-header">
								  <img
									  src={work.imagSrc}
									  alt={work.companyName}
									  className="work-image"
								   />
								  <div className="work-title">{work.companyName}</div>
								</div>
								<div className="work-infoFooter">
								    <div className="work-subtitle">
									  {work.role}
								    </div>
								    <div className="work-duration">{work.workingPeriod}</div>
								</div>
							</div>
						))}
					</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
