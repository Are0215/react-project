import React from 'react';

function Layout(props){
    return(
        <html>
            <head>
                <meta charSet="utf-8"/>
            </head>
            <body>
                <div 
                    id="render-target"
                    dangerouslySetInnerHTML={{
                        __html:props.content,
                    }}
                />
            </body>
            <script src="http://localhost:3001/app.js"/>
        </html>
    );
}

export default Layout;