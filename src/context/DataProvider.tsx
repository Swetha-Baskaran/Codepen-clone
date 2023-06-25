import React, {createContext, useState} from "react";

interface IDataContext {
	viewType: number;
	setViewType: React.Dispatch<React.SetStateAction<number>>;
	srcCode: string;
	setSrcCode: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<any>(null);

const DataProvider: any = ({children}: {children: any}) => {
	const [viewType, setViewType] = useState(1);
	const [html, setHtml] = useState(
		localStorage.getItem("html") ? localStorage.getItem("html") : ""
	);
	const [css, setCss] = useState(
		localStorage.getItem("css") ? localStorage.getItem("css") : ""
	);
	const [js, setJs] = useState(
		localStorage.getItem("js") ? localStorage.getItem("js") : ""
	);
	const [srcCode, setSrcCode] = useState(
		localStorage.getItem("code") ? localStorage.getItem("code") : ""
	);

	return (
		<DataContext.Provider
			value={{
				viewType,
				setViewType,
				srcCode,
				setSrcCode,
				html,
				setHtml,
				css,
				setCss,
				js,
				setJs,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvider;
