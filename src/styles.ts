import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import white from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";

const drawerWidth = 240;

export const styles = (theme: Theme) => createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            }
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        drawerListItem: {
            fontSize: "0.9rem",
            lineHeight: "1.3",
            color: "gray",
            marginBottom: "2px"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        highlighted: {
            fontWeight: "bold",
            color: "red"
        },
        paper: {
            margin: "40px auto",
            padding: "10px 10px"
        },

        list: {
            marginTop: "16px",
            marginVertical: "16px"
        },
        bold: {
            fontWeight: "bold"
        },
        floatRight: {
            float: "right"
        },
        pxy: {
            padding: "16px"
        },
        mxy: {
           margin: "16px"
        },
        mlAuto: {
            marginLeft: "auto"
        },
        mr: {
            marginRight: "5em"
        },
        mt: {
            marginTop: "5em"
        },
        mb: {
            marginBottom: "5em"
        },
        blue: {
            color: "blue"
        },
        bgBlue: {
            background: blue[700]
        },
        white: {
            color: white[50]
        },
        red: {
            color: "red"
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
});
const useStyles = makeStyles(styles);

export default useStyles;
