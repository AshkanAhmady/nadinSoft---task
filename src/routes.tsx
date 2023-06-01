import DashboardPage from "./pages/DashboardPage"
import NotFound from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import TodosPage from "./pages/TodosPage";
import WeatherPage from "./pages/WeatherPage";

const routes = [
  { path: "/weather", element: <WeatherPage /> },
  { path: "/todos", element: <TodosPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/", element: <DashboardPage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
