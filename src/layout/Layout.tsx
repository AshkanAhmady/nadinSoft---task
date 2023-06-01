import { ChildsComponentsType } from "../types";
import Header from "./Header";

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <aside>
                    sidebar
                </aside>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;