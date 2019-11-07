import React from "react";

import Head from "../head"
import Header from "../header"
import Footer from "../footer"
import MobileNav from "../mobileNav";

import styles from "./layout.module.css"

const Layout = ({ title, children }) => (
    <main className={styles.layout}>
        <Head title={title}/>
            <Header/>
                { children }
            <Footer/>
        <MobileNav />
    </main>
)

export default Layout;
