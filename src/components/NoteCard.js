import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { yellow, green, pink, blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "onepiece") {
        return "1px solid #778beb";
      }
      if (note.category === "bleach") {
        return "1px solid #e67e22";
      }
      if (note.category === "deathnote") {
        return "1px solid #beff7a";
      }
    },
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "onepiece") {
        return yellow[700];
      }
      if (note.category === "bleach") {
        return green[700];
      }
      if (note.category === "deathnote") {
        return pink[700];
      }
      return blue[700];
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <Card elevation={3} className={classes.test}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
