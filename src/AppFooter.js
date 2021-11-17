import React from 'react';

export const AppFooter = (props) => {

    return (
        <div className="layout-footer">
            <img src={props.layoutColorMode === 'light' ? 'assets/amidazul.png' : 'assets/amidblanco.png'} alt="Logo" height="20" className="mr-2" />
            <span className="font-medium ml-2">© 2021 AMID</span>
        </div>
    );
}
