import {useState, useContext} from "react";
import {Controlled as ControlledEditor} from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import {Box, styled} from "@mui/material";
import {CloseFullscreen} from "@mui/icons-material";
import {DataContext} from "../context/DataProvider";

const Editor = ({
	value,
	setValue,
	title,
	language,
	icon,
	color,
}: {
	value: string;
	setValue: any;
	title: string;
	language: string;
	icon: string;
	color: string;
}) => {
	const [open, setOpen] = useState(false);
	const {viewType} = useContext(DataContext);
	const Header = styled(Box)`
		display: flex;
		justify-content: space-between;
		background: #060606;
		color: #aaaebc;
		font-weight: 700;
	`;
	const Heading = styled(Box)`
		background: #1d1e22;
		padding: 9px 12px;
		display: flex;
	`;
	return (
		<>
			<div
				style={
					viewType === 1
						? {
								display: "flex",
								flexDirection: "column",
								flexGrow: open ? 0 : 2,
								borderLeft:
									language !== "jsx" ? "10px solid black" : "none",
						  }
						: {
								display: "flex",
								flexDirection: "column",
								borderRight: "10px solid black",
								borderLeft: "5px solid black",
								borderTop: "10px solid black",
						  }
				}
			>
				<Header>
					<Heading>
						<Box
							component='span'
							style={{
								background: color,
								borderRadius: 5,
								marginRight: 5,
								height: 20,
								width: 20,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color: "#000",
								paddingBottom: 2,
							}}
						>
							{icon}
						</Box>
						{title}
					</Heading>
					{viewType === 1 && (
						<CloseFullscreen
							fontSize='small'
							style={{alignSelf: "center"}}
							onClick={() => setOpen(prevState => !prevState)}
						/>
					)}
				</Header>
				<ControlledEditor
					value={value}
					options={{
						lineWrapping: true,
						lint: true,
						mode: language,
						theme: "material",
						lineNumbers: true,
					}}
					autoScroll={true}
					onBeforeChange={(editor, data, value) => {
						// Handle the code change event here
						setValue(value);
					}}
				/>
			</div>
		</>
	);
};

export default Editor;
