import React from "react";
import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    withStyles
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import classnames from "classnames";

const styles = theme => ({
    link: {
        textDecoration: "none",
        paddingLeft: theme.spacing(4.5),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        "&:hover, &:focus": {
            backgroundColor: theme.palette.background.light
        }
    },
    linkActive: {
        backgroundColor: theme.palette.background.light
    },
    linkNested: {
        paddingLeft: 0,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:hover, &:focus": {
            backgroundColor: "#FFFFFF"
        }
    },
    linkIcon: {
        marginRight: theme.spacing(1),
        color: `${theme.palette.text.secondary}99`,
        transition: theme.transitions.create("color"),
        width: 24,
        display: "flex",
        justifyContent: "center"
    },
    linkIconActive: {
        color: theme.palette.primary.main
    },
    linkText: {
        padding: 0,
        color: `${theme.palette.text.secondary}CC`,
        transition: theme.transitions.create(["opacity", "color"]),
        fontSize: 16
    },
    linkTextActive: {
        color: theme.palette.text.primary
    },
    linkTextHidden: {
        opacity: 0
    },
    nestedList: {
        paddingLeft: theme.spacing(4.5) + 40
    },
    sectionTitle: {
        marginLeft: theme.spacing(4.5),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        height: 1,
        backgroundColor: "#D8D8D880"
    }
});

function SidebarLink({
    onClick,
    link,
    icon,
    label,
    children,
    location,
    classes,
    isSidebarOpened,
    nested,
    type
}) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const isLinkActive =
        link &&
        (location.pathname === link || location.pathname.indexOf(link) !== -1);

    if (type === "title")
        return (
            <Typography
                className={classnames(classes.linkText, classes.sectionTitle, {
                    [classes.linkTextHidden]: !isSidebarOpened
                })}>
                {label}
            </Typography>
        );

    if (type === "divider") return <Divider className={classes.divider} />;
    if (!children) {
        return (
            <ListItem
                button
                component={link && Link}
                to={link || null}
                onClick={onClick || null}
                className={classes.link}
                classes={{
                    root: classnames(classes.linkRoot, {
                        [classes.linkActive]: isLinkActive && !nested,
                        [classes.linkNested]: nested
                    })
                }}
                disableRipple>
                <Tooltip
                    disableHoverListener={!!isSidebarOpened}
                    title={label}
                    placement="right">
                    <ListItemIcon
                        className={classnames(classes.linkIcon, {
                            [classes.linkIconActive]: isLinkActive
                        })}>
                        {icon}
                        {/* {nested ? <Dot color={isLinkActive && "primary"} /> : icon} */}
                    </ListItemIcon>
                </Tooltip>
                <ListItemText
                    classes={{
                        primary: classnames(classes.linkText, {
                            [classes.linkTextActive]: isLinkActive,
                            [classes.linkTextHidden]: !isSidebarOpened
                        })
                    }}
                    primary={label}
                />
            </ListItem>
        );
    }
    function toggleCollapse(e) {
        if (isSidebarOpened) {
            e.preventDefault();
            setIsCollapsed(!isCollapsed);
        }
    }
    return (
        <React.Fragment>
            <ListItem
                button
                component={link && Link}
                onClick={toggleCollapse}
                className={classes.link}
                to={link}
                disableRipple>
                <Tooltip
                    disableHoverListener={!!isSidebarOpened}
                    title={label}
                    placement="right">
                    <ListItemIcon
                        className={classnames(classes.linkIcon, {
                            [classes.linkIconActive]: isLinkActive
                        })}>
                        {icon}
                        {/* {nested ? <Dot color={isLinkActive && "primary"} /> : icon} */}
                    </ListItemIcon>
                </Tooltip>
                <ListItemText
                    classes={{
                        primary: classnames(classes.linkText, {
                            [classes.linkTextActive]: isLinkActive,
                            [classes.linkTextHidden]: !isSidebarOpened
                        })
                    }}
                    primary={label}
                />
            </ListItem>
            {children && (
                <Collapse
                    in={isSidebarOpened ? isCollapsed : false}
                    timeout="auto"
                    unmountOnExit
                    className={classes.nestedList}>
                    <List component="div" disablePadding>
                        {children.map(childrenLink => (
                            <SidebarLink
                                key={childrenLink && childrenLink.link}
                                location={location}
                                isSidebarOpened={isSidebarOpened}
                                classes={classes}
                                nested
                                {...childrenLink}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </React.Fragment>
    );
}

export default withStyles(styles, { withTheme: true })(SidebarLink);
