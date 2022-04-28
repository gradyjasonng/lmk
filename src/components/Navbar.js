import React from "react";
import { Link } from "gatsby";
import sprite from "../img/lmk-sprite.png";
import SpriteScroller from "../components/SpriteScroller";
import { Tween, ScrollTrigger, Timeline } from "react-gsap";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: "",
			spriteProgress: 0,
		};
	}

	toggleHamburger() {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: "is-active",
					  })
					: this.setState({
							navBarActiveClass: "",
					  });
			}
		);
	}

	render() {
		return (
			<ScrollTrigger
        trigger="main"
				start="top top"
				end="+=50%"
				scrub
				onUpdate={(self) =>
					this.setState({ spriteProgress: self.progress.toFixed(3) })
				}
			>
				<Timeline
					target={
						<nav
							className="navbar is-fixed-top"
							role="navigation"
							aria-label="main-navigation"
						>
							<div className="container">
								<div
									id="navMenuLeft"
									className={`navbar-menu ${this.state.navBarActiveClass} ${this.state.active && "is-hidden"} `}
								>
									<div className="navbar-start has-text-centered">
										<Link
											className="navbar-item"
											to="/about"
										>
											Quicklink
										</Link>
										<Link
											className="navbar-item"
											to="/products"
										>
											Quicklink
										</Link>
										<Link
											className="navbar-item"
											to="/blog"
										>
											Quicklink
										</Link>
									</div>
								</div>
								<div className="navbar-brand m-0 pt-1">
									<Link
										to="/"
										className="navbar-item"
										title="Logo"
									>
										<SpriteScroller
											sprite={sprite}
											nframes={143}
											width="13rem"
											aspectRatio={533 / 134}
											progress={this.state.spriteProgress}
										/>
									</Link>
									{/* Hamburger menu */}
									<div
										className={`navbar-burger burger ${this.state.navBarActiveClass}`}
										data-target="navMenu"
										role="menuitem"
										tabIndex={0}
										onKeyPress={() =>
											this.toggleHamburger()
										}
										onClick={() => this.toggleHamburger()}
									>
										<span />
										<span />
										<span />
									</div>
								</div>
								<div
									id="navMenuRight"
									className={`navbar-menu ${this.state.navBarActiveClass} `}
								>
									<div className="navbar-end has-text-centered">
										<Link
											className="navbar-item"
											to="/about"
										>
											Mission
										</Link>
										<Link
											className="navbar-item"
											to="/products"
										>
											The Team
										</Link>
										<Link
											className="navbar-item"
											to="/blog"
										>
											Newsroom
										</Link>
										<Link
											className="navbar-item"
											to="/contact"
										>
											Contact
										</Link>
									</div>
								</div>
							</div>
						</nav>
					}
				>
					<Tween from={{ autoAlpha: 0, duration: 1 }} />
					<Tween from={{ duration: 10 }} />
				</Timeline>
			</ScrollTrigger>
		);
	}
};

export default Navbar;
