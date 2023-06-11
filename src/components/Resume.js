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
        <article id='resume' style={{textAlign: 'center'}}>
            <h2>Download my Resume Below!</h2>
            <Button 
                variant="contained" 
                style={{
                  backgroundColor: 'purple', 
                  transition: 'transform 0.3s ease-in-out'
                }} 
                onClick={handleDownload} 
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            > 
                Justin Smith's Resume 
            </Button>
        </article>
    );
}

export { Resume };
