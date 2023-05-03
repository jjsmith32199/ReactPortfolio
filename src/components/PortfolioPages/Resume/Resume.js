import React from "react";

export default function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = { Resume };
        link.download = "JustinSmithResume.pdf";
        link.click();
    };

    return (
        <article id='resume'>
            <h2>Download my Resume Below!</h2>
            <button id='download' onClick={handleDownload}> Justin Smith's Resume </button>
        </article>
    );
}

export { Resume };