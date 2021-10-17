import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const Wrapper = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            color: '#444444',
            backgroundColor: '#fff',
            boxShadow: `0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)`,
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                backgroundColor: '#fff'
            },
        },
        title: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
        company: {
            display: `flex`,
            padding: 10,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1
        },
        rounded: {
            color: '#444444',
            backgroundColor: '#73717129',
        },
        drawerFooter: {
            position: 'absolute',
            bottom: 0,
            display: 'flex',
            width: '100%',
            textAlign: 'center',
            paddingBottom: 10,
        },
        breadCrumb: {
            '& .MuiBreadcrumbs-li:last-child': {
                color: '#0b57b5',
                '& p': {
                    fontWeight: 600,
                    fontSize: 16
                }
            }
        }
    }),
);