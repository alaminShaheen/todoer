import { Sidebar } from "@/components/Sidebar.tsx";
import { TopBar } from "@/components/TopBar.tsx";
import "./App.css";

function App () {
	
	return (
		<div className="h-full bg-gray-50">
			<TopBar />
			<div
				className="content-wrapper grid grid-rows-1 grid-cols-[1fr_auto] items-center h-[calc(100vh-3rem)] max-w-[992px] m-auto p-4">
				<Sidebar />
				<div>Hello world</div>
			</div>
		</div>
	);
}

export default App;
