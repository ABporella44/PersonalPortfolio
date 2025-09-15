import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
				<div>
					<div className="works-body">
						<div className="work">
							<img
								src="./techm.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Tech Mahindra</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">JUN 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./cognitivzen.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">cognitivzen Technologies</div>
							<div className="work-subtitle">
								Sr.Software Engineer
							</div>
							<div className="work-duration">JUN 2022 - JUN 2024</div>
						</div>
						<div className="work">
							<img
								src="./snapper.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Snapper IT</div>
							<div className="work-subtitle">
								Front End Developer
							</div>
							<div className="work-duration">AUG 2020 -JUN 20221</div>
						</div>
					</div>
					<div className="works-body">
					<div className="work">
							<img
								src="./troy.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Troy IT Consultency</div>
							<div className="work-subtitle">
								React Developer
							</div>
							<div className="work-duration">APR 2022 -JUN 22</div>
						</div>
						<div className="work">
							<img
								src="./kpt.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Key Point Technologies</div>
							<div className="work-subtitle">
								React Developer
							</div>
							<div className="work-duration">SEP 2021 -FEB 2022</div>
						</div>
						<div className="work">
							<img
								src="./DWBI.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">DWBI services</div>
							<div className="work-subtitle">
								JR Front End Developer
							</div>
							<div className="work-duration">DEC 2018 -NOV 2019</div>
						</div>
					</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
