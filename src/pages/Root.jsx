import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Root() {
    return (
        <>
            <Header />
            <main id="detail">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
