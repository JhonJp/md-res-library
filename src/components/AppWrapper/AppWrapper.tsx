import React, { FC } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import {
    AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, Toolbar, Typography, Avatar,
    Tooltip
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { PropsAppWrapper } from '../../interfaces/Interface';
import { Wrapper } from '../../theme/Theme';
import { BreadCrumb } from '../Breadcrumb/BreadCrumb';


export const AppWrapper: FC<PropsAppWrapper> = (props) => {
    const { window, drawerHeader, drawerItems, currentPage, breadcrumbs, footerLink } = props;
    const classes = Wrapper();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const getNameChars = (name) => {
        let splits = name.split(' ')
        return (splits[0].charAt(0) + '' + splits[splits.length - 1].charAt(0)).toUpperCase()
    }

    const drawer = (
        <div>
            <div className={`${classes.toolbar} ${classes.company}`}>
                <Avatar variant="rounded" className={classes.rounded} src={drawerHeader.useImg ? drawerHeader.imgSrc : undefined}>
                    {drawerHeader.useName ? getNameChars(drawerHeader.name) : undefined}
                </Avatar>
                <Typography style={{
                    padding: 0, margin: '8px 5px', overflow: 'hidden', width: '150px', fontWeight: 600,
                    textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                }}>
                    {drawerHeader.name}
                </Typography>
            </div>
            <Divider />
            <List>
                {drawerItems.map((item, index) => (
                    <ListItem button key={item.label}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
            <List className={classes.drawerFooter}>
                <ListItem style={{ justifyContent: 'center' }}>
                    <Tooltip title={footerLink ? footerLink[0].label : 'Sign Out'}>
                        <IconButton style={{ justifyContent: 'center' }} onClick-={footerLink ? footerLink[0].action : undefined}>
                            <PowerSettingsNewIcon />
                        </IconButton>
                    </Tooltip>
                </ListItem>
                <ListItem style={{ justifyContent: 'center' }}>
                    <Tooltip title={footerLink ? footerLink[1].label : 'Settings'}>
                        <IconButton style={{ justifyContent: 'center' }} onClick-={footerLink ? footerLink[1].action : undefined}>
                            <SettingsRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {currentPage}
                    </Typography>
                    <Avatar variant="rounded" src={drawerHeader.useImg ? drawerHeader.imgSrc : undefined}>
                        {drawerHeader.useName ? getNameChars(drawerHeader.name) : undefined}
                    </Avatar>
                </Toolbar>
            </AppBar>
            <nav className={`${classes.drawer}`} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: `scrollbar ${classes.drawerPaper}`,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: `scrollbar ${classes.drawerPaper}`,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={`${classes.toolbar}`} />
                <BreadCrumb list={breadcrumbs} />
                {props.children}
            </main>
        </div>
    );
}
