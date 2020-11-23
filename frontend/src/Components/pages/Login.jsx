import React from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/Home/logo.png";

import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const LoginContainer = styled.div`
	position: absolute;
	background-color: #838c81;
	width: 100vw;
	height: 100vh;
	z-index: 200;
	.login-outter-div {
		position: absolute;
		left: 50%;
		top: 15%;
		.close {
			position: relative;
			right: -55%;
			cursor: pointer;
			&:hover {
				color: crimson;
			}
		}
		.login-inner-div {
			position: relative;
			left: -50%;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 28vw;
			height: 70vh;
			margin: 0 auto;
			h1.login-h1 {
				font-size: 2.4rem;
				font-weight: 400;
			}
			img {
				width: 18rem;
				height: 18rem;
			}
			form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				font-size: 1.8rem;
				width: 30rem;
				padding: 1rem 0;
				input[type="text"],
				input[type="password"] {
					align-self: left;
					width: 30rem;
					margin: 0.5rem 0;
					font-size: 1.8rem;
					padding: 0.4rem;
				}
				input[type="checkbox"] {
					align-self: left;
				}
				button.login-btn {
					align-self: center;
					margin: 2rem 0;
					width: 30rem;
					height: 4.5rem;
					color: #fff;
					border-radius: 1rem;
				}
			}
		}
	}
`;

const Login = (props) => {
	const onSubmit = (e) => {};
	return (
		<LoginContainer>
			<div className="login-outter-div">
				<Link to="/">
					<FaTimes size="22px" className="close" />
				</Link>
				<div className="login-inner-div">
					<img src={logo} alt="logo" />
					<h1 className="login-h1">Welcome to Vidyodaya</h1>
					<form autoComplete="off" onSubmit={onSubmit}>
						<label htmlFor="username"> Username </label>
						<input
							type="text"
							name="username"
							className="username"
						/>

						<label htmlFor="password"> Password </label>
						<input type="password" name="password" />

						<span>
							<input type="checkbox" name="remember" />
							<label htmlFor="remember"> Remember me</label>
						</span>

						<button type="submit" className="login-btn">
							{" "}
							Login{" "}
						</button>
					</form>
				</div>
			</div>
		</LoginContainer>
	);
};

export default Login;
