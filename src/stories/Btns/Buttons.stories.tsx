import { Meta, Story } from '@storybook/react'
import { Grid } from '@material-ui/core'
import { DefaultBtn } from '../../components/Button'

export default {
    title: 'Button',
    component: DefaultBtn
} as Meta

const Btns: Story<any> = (args) => {
    return (
        <Grid container>
            <Grid item xs={12} md={5} style={{ margin: 10 }}>
                <DefaultBtn {...args} />
            </Grid>
        </Grid>
    )
}

export const Args = Btns.bind({})

Args.args = {
    label: 'Click Here',
    onClick: (e) => console.log('Onclick event')
}