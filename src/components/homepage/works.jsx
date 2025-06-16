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
					<div className="works-body">
						<div className="work">
							<img
								src="./retrorabbit.png"
								alt="retrorabbit"
								className="work-image"
							/>
							<div className="work-title">Retro Rabbit</div>
							<div className="work-subtitle">
								UI/UX Designer
							</div>
							<div className="work-duration">2023 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./shecando.png"
								alt="shecando"
								className="work-image"
							/>
							<div className="work-title">SheCanDo</div>
							<div className="work-subtitle">
								Volunter UI/UX Designer
							</div>
							<div className="work-duration">2023 - 2023</div>
						</div>


						<div className="work">
							<img
								src="./sava.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">SAVA Technologies</div>
							<div className="work-subtitle">
								UI/UX Designer & Web Designer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
