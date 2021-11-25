import React from 'react';
import Highlight from 'react-highlight';
const ArticlePage = () => {
    return (
        <>
            <div>
                {/* <Highlight innerHTML={true}>{'<p>Hello world</p>'}</Highlight> */}
                <Highlight language="javascript">
                {`function foo() { return 'bar' }`}
                </Highlight>
            </div>
        </>
    );
};

export default ArticlePage;