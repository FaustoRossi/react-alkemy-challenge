import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";



function LogIn() {


	useEffect(() => {
		if (localStorage.getItem("token")) {
			window.location.assign("/home");
		}
	}, []);

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				confirmPassword: "",
			}}
			validate={(values) => {
				let error = {};

				if (values.email !== "challenge@alkemy.org") {
					error.email = "Por favor ingresa la cuenta autorizada";
				}
				if (values.password !== "react") {
					error.password = "La contraseña no es la autorizada";
				}
				if (
					values.confirmPassword !== values.password ||
					!values.confirmPassword
				) {
					error.confirmPassword = "Las contraseñas no coinciden";
				}
				return error;
			}}
			onSubmit={(values) => {
				console.log("enviado");
				axios
					.post("http://challenge-react.alkemy.org", values)
					.then((res) => {
						console.log(res.data.token);
						localStorage.setItem("token", res.data.token);
						window.location.assign("/");
						
					})
					.catch((err) => {
						alert("Datos incorrectos");
					});
			}}
		>
			{({ errors }) => (
				<>
					<Form>
						<div className="container mt-3">
							<div className="row">
								<div className="col-md-5 text-white">
									<div className="mb-3">
										<h1 className="my-4 font weight-bold-display-4">Log In</h1>
										<label htmlFor="email" className="form-label">
											E-mail
										</label>
										<Field
											placeholder="challenge@alkemy.org"
											id="email"
											name="email"
											type="text"
											className="form-control"
										/>
									</div>
									<ErrorMessage
										name="email"
										component={() => (
											<div
												style={{
													color: "#f50057",
													fontSize: "1rem",
													marginTop: "-15px",
												}}
												className="error"
											>
												{errors.email}
											</div>
										)}
									/>
									<div className="mb-3">
										<label htmlFor="pass" className="form-label">
											Contraseña
										</label>
										<Field
											placeholder="react"
											id="pass"
											name="password"
											type="password"
											className="form-control"
										/>
									</div>
									<ErrorMessage
										name="password"
										component={() => (
											<div
												style={{
													color: "#f50057",
													fontSize: "1rem",
													marginTop: "-15px",
												}}
												className="error"
											>
												{errors.password}
											</div>
										)}
									/>
									<div className="mb-3">
										<label htmlFor="confirmPassword" className="form-label">
											Confirma la contraseña
										</label>
										<Field
											placeholder="react"
											id="confirmPassword"
											name="confirmPassword"
											type="password"
											className="form-control"
										/>
									</div>
									<ErrorMessage
										name="confirmPassword"
										component={() => (
											<div
												style={{
													color: "#f50057",
													fontSize: "1rem",
													marginTop: "-15px",
												}}
												className="error"
											>
												{errors.confirmPassword}
											</div>
										)}
									/>
									{/* <Spinner /> */}

									<button
										className="btn mt-3 btn-outline-light"
										type="submit"
										fontWeight="bold"
									>
										Ingresar
									</button>
								</div>
							</div>
						</div>
					</Form>
				</>
			)}
		</Formik>
	);
}

export default LogIn;
