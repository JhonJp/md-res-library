import { Meta, Story } from '@storybook/react'
import { AppWrapper } from '../../components/AppWrapper'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded'

export default {
    title: 'AppWrapper Component',
    component: AppWrapper
} as Meta

const Wrapper: Story<any> = (args) => {
    return (
        <AppWrapper {...args} />
    )
}

export const Primary = Wrapper.bind({})

Primary.args = {
    currentPage: 'Homepage',
    breadcrumbs: [
        {
            id: '1',
            label: 'Homepage',
            link: '/'
        },
        {
            id: '2',
            label: 'Welcome',
            link: '/dashboard'
        }
    ],
    drawerHeader: {
        name: 'John Paeldin',
        useImg: true,
        imgSrc: '/2.png'
    },
    drawerItems: [
        {
            icon: <InboxIcon />,
            label: 'Homepage',
            link: '/'
        },
        {
            icon: <AccountBoxRoundedIcon />,
            label: 'My Account',
            link: '/myaccount'
        },
        {
            icon: <PermContactCalendarRoundedIcon />,
            label: 'About',
            link: '/about'
        },
    ],
    footerLink: [{
        id: '1',
        label: 'Sign Out',
        link: '/logout'
    }, {
        id: '2',
        label: 'Settings',
        link: '/settings'
    }]
}