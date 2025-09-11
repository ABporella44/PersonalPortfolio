import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, link, seeMore } = props;

    const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [seeMoreText,setSeeMoreText] = useState("");

    const openDialog = (seeMore,openAndClose) => {
		setSeeMoreText(seeMore)
        setIsDialogOpen(openAndClose);
    };

    const closeDialog = () => {
        setSeeMoreText("");
        setIsDialogOpen(false);
    };

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="projec-viewMore" style={{display:"flex",justifyContent:"flex-end",marginTop:"10px",fontFamily:"math",color:"#7d0be6",fontSize:"13px",}}><p onMouseLeave={()=>openDialog(seeMore,false)} onMouseOver={()=>openDialog(seeMore,true)}>...ViewMore</p></div>
					</div>
				</Link>
				{isDialogOpen && (
                    <dialog open className="more-details-dialog">
                        <div className="dialog-content">
                            <p>{seeMoreText}</p>
                            <button onClick={closeDialog}>Close</button>
                        </div>
                    </dialog>
                )}
			</div>
		</React.Fragment>
	);
};

export default Project;
