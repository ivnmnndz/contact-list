import React from "react";
import PropTypes from "prop-types";

const ContactCard = props => {
	return (
		<div className="contact-card">
			<img src={props.item.avatar} className="avatar" />
			<div>
				<ul className="contact-info">
					<li>
						<h3>{props.item.name}</h3>
					</li>
					<li>
						<span className="icon">
							<i className="fas fa-map-marker-alt"></i>
						</span>
						<span>{props.item.address}</span>
					</li>
					<li>
						<span className="icon">
							<i className="fas fa-phone"></i>
						</span>
						<span>{props.item.phone}</span>
					</li>
					<li>
						<span className="icon">
							<i className="fas fa-envelope"></i>
						</span>
						<span>{props.item.email}</span>
					</li>
				</ul>
			</div>
			<section className="action-buttons">
				<div>
					<button>
						<i className="fas fa-pencil-alt"></i>
					</button>
					<span>Edit</span>
				</div>
				<div>
					<button>
						<i className="fas fa-trash-alt"></i>
					</button>
					<span>Delete</span>
				</div>
			</section>
		</div>
	);
};

ContactCard.propTypes = {
	item: PropTypes.object
};

export default ContactCard;
