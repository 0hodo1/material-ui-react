import {
  Typography,
  Container,
  Button,
  ButtonGroup,
  makeStyles,
} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";

// Custom Style Generate
const createStyles = makeStyles({
  btn: {
    backgroundColor: "coral",
    fontSize: 30,
    "&:hover": {
      backgroundColor: "#ffc0cb",
    },
  },
  title: {
    textDecoration: "underline",
    fontSize: "2rem",
  },
});

const Create = () => {
  const customClass = createStyles();

  return (
    <Container>
      {/* Paragraph */}
      <Typography>
        <Typography variant="h3" color="textSecondary" align="center">
          Create a new note
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          Deserunt culpa veniam ut proident enim occaecat velit excepteur
          consectetur. Excepteur officia eu elit magna anim reprehenderit est
          sunt amet id cillum dolor deserunt elit. Excepteur mollit irure
          excepteur dolore. Laboris minim irure Lorem officia quis dolore
          commodo est. Consequat commodo dolore velit nostrud.
        </Typography>
        <Typography variant="h5" color="textSecondary" align="left" noWrap>
          Deserunt culpa veniam ut proident enim occaecat velit excepteur
          consectetur. Excepteur officia eu elit magna anim reprehenderit est
          sunt amet id cillum dolor deserunt elit. Excepteur mollit irure
          excepteur dolore. Laboris minim irure Lorem officia quis dolore
          commodo est. Consequat commodo dolore velit nostrud.
        </Typography>
      </Typography>

      {/* Button */}
      <Typography gutterBottom>
        <Typography gutterBottom>
          <Button variant="outlined">Send</Button>
          <Button variant="outlined" color="primary">
            Send
          </Button>
          <Button variant="outlined" color="secondary">
            Send
          </Button>
          <Button variant="contained">Send</Button>
        </Typography>
        <Typography gutterBottom>
          <ButtonGroup color="primary">
            <Button>Comment</Button>
            <Button color="secondary">Share</Button>
            <Button>Like</Button>
          </ButtonGroup>
        </Typography>
        <Typography gutterBottom>
          <Button color="primary" variant="contained" disableElevation>
            Generate
          </Button>
        </Typography>
        <Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() => console.log("Clicked")}
          >
            Click
          </Button>
        </Typography>
      </Typography>

      {/* Icon */}
      <Typography gutterBottom>
        <AppsIcon color="primary" />
        <AppsIcon color="secondary" />
        <AppsIcon color="" fontSize="large" />
        <AppsIcon color="" fontSize="large" />
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddAlertOutlinedIcon color="primary" />}
        >
          Notify Me
        </Button>
      </Typography>

      {/* Custom Style */}
      <Typography gutterBottom>
        <Button className={customClass.btn}>Custom Style</Button>
        <Typography variant="h2" className={customClass.title} align="center">
          New Style This Title
        </Typography>
      </Typography>

      {/* Cutom Theme */}
      <Typography gutterBottom>
        <Typography
          variant="h2"
          color="secondary"
          className={customClass.title}
          align="center"
        >
          New Style Thema
        </Typography>
      </Typography>
    </Container>
  );
};

export default Create;
