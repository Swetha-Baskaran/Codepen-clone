import DataProvider from "./context/DataProvider";
import Layout from "./components/Layout";

export default function App() {
	return (
		<DataProvider>
			<Layout />
		</DataProvider>
	);
}
