import { Meta, Story } from '@storybook/react'
import { Grid } from '@material-ui/core'
import { InlineTextField, RoundedTextField, AutoCompleteSearch } from '../../components/Inputs/Inputs'

export default {
    title: 'Inlint Text Input',
    component: InlineTextField
} as Meta

const TextInput: Story<any> = (args) => {
    return (
        <Grid container>
            <Grid item xs={12} md={5} style={{ margin: 10 }}>
                <InlineTextField {...args} password />
            </Grid>
            <Grid item xs={12} md={6} style={{ margin: 10 }}>
                <InlineTextField {...args} labelled />
            </Grid>
            <Grid item xs={12} md={5} style={{ margin: 10 }}>
                <RoundedTextField {...args} />
            </Grid>
            <Grid item xs={12} md={6} style={{ margin: 10 }}>
                <RoundedTextField {...args} labelled />
            </Grid>
            <Grid item xs={12} md={5} style={{ margin: 10 }}>
                <AutoCompleteSearch {...args} options={[{ id: 'sample', label: 'Sample 1' }]} />
            </Grid>
        </Grid>
    )
}

export const Args = TextInput.bind({})

Args.args = {
    label: 'First Name'
}