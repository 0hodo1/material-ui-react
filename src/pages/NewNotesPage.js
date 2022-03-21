import { useState, useEffect } from "react";
import { Container, Grid, Paper } from "@material-ui/core";

import NoteCard from "../components/NoteCard";

const NewNotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    // <div>
    //   {notes.map((note) => (
    //     <p key={note.id}>{note.title}</p>
    //   ))}
    // </div>

    <>
      {/* Grid System */}
      {/* <Grid container>
        <Grid item md={4} sm={6} xs={12}>
          <Paper align="center">
            <h1>Notes</h1>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper align="right">
            <h1>Notes</h1>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper>
            <h1>Notes</h1>
          </Paper>
        </Grid>
      </Grid> */}

      {/* Notes Grid System */}
      {/* <Container>
        <Grid container>
          {notes.map((note) => (
            <Grid item key={note.id} lg={4} md={4} sm={6} xs={12}>
              <Paper>
                <h1>{note.title}</h1>
                <p>{note.details}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container> */}

      {/* Card */}
      <Container>
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid item key={note.id} lg={4} md={4} sm={6} xs={12}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default NewNotesPage;
