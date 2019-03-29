import React from 'react';


const BasFormContent = (props) => {
    const  { classNames , url , method} = props;
    return (
        <div>
            <form className={ classNames } method={ method }  url={ url }>
            {/** form contents will go here */}
            { props.children }
            </form>
        </div>
    )
}

export { BaseFormContent};