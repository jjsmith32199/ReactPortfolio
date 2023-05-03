import React from "react";  

const Layout = (props) => {
    return (
        <div className="layout">
            <header>
                {/* */}
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                {/* */}
            </footer>
        </div>
        
    );
}


export { Layout };