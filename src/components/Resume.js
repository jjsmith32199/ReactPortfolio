import React from "react";
import Button from '@material-ui/core/Button';

export default function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/JustinSmithResume.pdf`;
        link.download = "JustinSmithResume.pdf";
        link.click();
    };

    return (
        <article id='resume'>
            <h2>Download my Resume Below!</h2>
            <Button variant="contained" onClick={handleDownload}> Justin Smith's Resume </Button>
        </article>
    );
}

export { Resume };