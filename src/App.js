import { Routes, Route } from "react-router-dom";
import Content from "./components/content/content";
import Detail from "./components/detail/detail";
import Mainpage from "./components/mainpage/mainpage";
import { Provider } from "react-redux";
import store from "./redux/reducer";
function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<Mainpage />} />
				<Route path="/content" element={<Content />} />
				<Route path="/details" element={<Detail />} />
			</Routes>
		</Provider>
	);
}

export default App;
