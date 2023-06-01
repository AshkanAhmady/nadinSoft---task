import DashboardPage from "./pages/dashboard/DashboardPage";
import NotFound from "./pages/NotFoundPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TodosPage from "./pages/todos/TodosPage";
import WeatherPage from "./pages/weather/WeatherPage";

const routes = [
  { path: "/weather", element: <WeatherPage /> },
  { path: "/todos", element: <TodosPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/", element: <DashboardPage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
