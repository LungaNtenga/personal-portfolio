import React from "react";

function article_1() {
	return {
		date: "12 July 2024",
		title: "Reflecting on a Tech experience",
		description:
			"In this article, I reflect on the experience of the working after graduation.",
		keywords: [
			"Tech Skills",
			"Lunga",
			"Lunga Ntenga",
			"Ciryl Ntenga",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "22 Jan 2025",
		title: "Software Developer Path at UJ",
		description:
			"In this article, I explore my main objectives for the year as a developer.",
		style: ``,
		keywords: [
			"Certifications",
			"University of Johannesburg",
			"Lunga",
			"Lunga Ntenga",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
