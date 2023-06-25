import {useEffect, useContext} from "react";
import "../App.css";
import Editor from "./Editor";
import {DataContext} from "../context/DataProvider";

function Home() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {
		viewType,
		html,
		setHtml,
		css,
		setCss,
		js,
		setJs,
		srcCode,
		setSrcCode,
	} = useContext(DataContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcCode(`
               <html>
                 <body>${html}</body>
                 <style>${css}</style>
                 <script>${js}</script>
               <html>`);
		}, 250);

		return () => clearTimeout(timeout);
	}, [css, html, js]);

	return (
		<div
			className={
				viewType === 0 ? "App-template-vertical" : "App-template-horizontal"
			}
		>
			<div
				className={
					viewType === 0 ? "editors-template2" : "editors-template1"
				}
			>
				<Editor
					value={html}
					setValue={setHtml}
					title={"HTML"}
					language='jsx'
					icon='/'
					color='#FF3C41'
				/>
				<Editor
					value={css}
					setValue={setCss}
					title={"CSS"}
					language='css'
					icon='*'
					color='#0EBEFF'
				/>
				<Editor
					value={js}
					setValue={setJs}
					title={"JS"}
					language='js'
					icon='( )'
					color='#FCD000'
				/>
			</div>
			<div
				className={
					viewType === 0
						? "output-screen-vertical"
						: "output-screen-horizontal"
				}
				style={
					html || css || js ? {background: ""} : {background: "#444857"}
				}
			>
				<iframe
					title='output'
					srcDoc={srcCode}
					sandbox='allow-scripts'
					frameBorder='0'
					width='100%'
					height='100%'
				/>
			</div>
		</div>
	);
}

export default Home;
