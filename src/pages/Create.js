import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Button,
  ButtonGroup,
  makeStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
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
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  margin: {
    marginTop: 20,
  },
});

const Create = () => {
  const customClass = createStyles();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("onepiece");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(details);
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details, category);
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      }).then(() => navigate("/newpage"));
    }
  };

  return (
    <Container>
      {/* Paragraph */}
      {/* <Typography>
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
      </Typography> */}

      {/* Button */}
      {/* <Typography gutterBottom>
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
      </Typography> */}

      {/* Icon */}
      {/* <Typography gutterBottom>
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
      </Typography> */}

      {/* Custom Style */}
      {/* <Typography gutterBottom>
        <Button className={customClass.btn}>Custom Style</Button>
        <Typography variant="h2" className={customClass.title} align="center">
          New Style This Title
        </Typography>
      </Typography> */}

      {/* Cutom Theme */}
      {/* <Typography gutterBottom>
        <Typography
          variant="h2"
          color="secondary"
          className={customClass.title}
          align="center"
        >
          New Style Thema
        </Typography>
      </Typography> */}

      {/* TextField */}
      {/* <Typography gutterBottom>
        <form>
          <TextField
            label="Not Giriniz"
            variant="standard"
            required
            fullWidth
          />
          <TextField
            label="Not Giriniz"
            variant="outlined"
            className={customClass.field}
          />
          <TextField label="Not Giriniz" variant="filled" />
          <TextField
            label="Not Giriniz"
            variant="filled"
            multiline
            className={customClass.field}
            fullWidth
            maxRows={4}
            minRows={2}
          />
        </form>
      </Typography> */}

      {/* Created Form */}
      <Typography gutterBottom>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={customClass.margin}
            label="Title"
            fullWidth
            error={titleError}
          />
          <br />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            className={customClass.margin}
            label="Details"
            fullWidth
            error={detailsError}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={customClass.margin}
          >
            Submit
          </Button>
        </form>
      </Typography>

      {/* RadioGroup */}
      <Typography gutterBottom>
        <FormControl className={customClass.field}>
          <FormLabel>Note Categories</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <FormControlLabel
              value="onepiece"
              control={<Radio />}
              label="One Piece"
            />
            <FormControlLabel
              value="deathnote"
              control={<Radio />}
              label="Death Note"
            />
            <FormControlLabel
              value="bleach"
              control={<Radio />}
              label="Bleach"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={customClass.margin}
            >
              Select
            </Button>
          </RadioGroup>
        </FormControl>
      </Typography>
    </Container>
  );
};

export default Create;
