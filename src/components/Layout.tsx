import {useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {DataContext} from "../context/DataProvider";
import Home from "./Home";
import nav1 from "../assets/nav1.png";
import nav2 from "../assets/nav2.png";
import logo from "../assets/logo.png";

export default function Layout() {
	const {srcCode, html, css, js, setViewType} = useContext(DataContext);
	const saveLocally = () => {
		localStorage.setItem("html", html);
		localStorage.setItem("css", css);
		localStorage.setItem("js", js);
		localStorage.setItem("code", srcCode);
	};
	return (
		<Box
			sx={{
				display: "flex",
				width: "100vw",
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<AppBar
				component='nav'
				sx={{background: "#060606", borderBottom: "1px solid #2f2f2f"}}
			>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{flexGrow: 1}}>
						<img src={logo} alt="" />
					</Typography>
					<Box>
						<Button onClick={saveLocally} sx={{background: "#1e1f26"}}>
							Save
						</Button>
						<Button
							sx={{color: "#fff"}}
							onClick={() => {
								setViewType(0);
							}}
						>
							<img src={nav1} alt='' />
						</Button>
						<Button
							sx={{color: "#fff"}}
							onClick={() => {
								setViewType(1);
							}}
						>
							<img src={nav2} alt='' />
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Box>
				<Toolbar />
				<Home />
			</Box>
		</Box>
	);
}
