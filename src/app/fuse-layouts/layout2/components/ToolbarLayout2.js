import React from 'react';
import {AppBar, Hidden, MuiThemeProvider, Toolbar, withStyles} from '@material-ui/core';
import {FuseSearch} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';

const styles = theme => ({
    separator: {
        width          : 1,
        height         : 32,
        backgroundColor: theme.palette.divider
    }
});

const ToolbarLayout2 = ({classes, settings, toolbarTheme}) => {

    const layoutConfig = settings.layout.config;

    return (
        <MuiThemeProvider theme={toolbarTheme}>
            <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="container p-0 lg:px-24">

                    {layoutConfig.navbar.display && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
                            <div className={classes.separator}/>
                        </Hidden>
                    )}

                    <div className="flex flex-1">
                        {/* <Hidden mdDown> */}
                            {/* <FuseShortcuts/> */}
                        {/* </Hidden> */}
                    </div>

                    <div className="flex">

                        <FuseSearch/>

                        <div className={classes.separator}/>

                        <QuickPanelToggleButton/>
                    </div>

                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        settings    : fuse.settings.current,
        toolbarTheme: fuse.settings.toolbarTheme
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(ToolbarLayout2)));