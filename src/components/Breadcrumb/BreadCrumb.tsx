import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { FC } from "react";
import { Items, PropsBreadcrumb } from "../../interfaces/Interface";
import { Wrapper } from '../../theme/Theme';

export const BreadCrumb: FC<PropsBreadcrumb> = (props) => {
    const { list } = props
    const classes = Wrapper()
    return (
        <>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={classes.breadCrumb}>
                {
                    list.map((item: Items, index) => {
                        if (index !== (list.length - 1)) {
                            return (
                                <Link color="inherit" href={item.link} key={`${index}-${item.label}`}>
                                    {item.label}
                                </Link>
                            )
                        }
                    })
                }
                <Typography color="inherit">{list[list.length - 1].label}</Typography>
            </Breadcrumbs>
        </>
    )
}