// src/pages/Ranking.js
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { Grid, Stack, Card } from '@mui/material';
import { Button, Dialog, DialogTitle, DialogActions} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';

/**
 * Parameter rank comes from /pages/Account.js
 * Paramter user comes from /pages/Account.js
 */
function Ranking({rank, user}) {
  const [characters, setCharacters] = useState([]);
  const [edit, setEdit] = React.useState(false);

  const handleClickEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };

  useEffect(() =>{
    if (rank === null){
      fetch("/characters")
      .then ((result) => result.json())
      .then ((data) => {
          const user = data.map((char) => ({id: char.name, name: char.name})); 
          setCharacters(user);
      });
    }else{ 
      fetch("rankings/" + rank.id)
      .then ((result) => result.json())
      .then ((data) => {
        const user = data.rank.map(r => 
          ({
            id: r.substring(r.indexOf(">")+2, r.indexOf(",")-1), 
            name: r.substring(r.indexOf(">")+2, r.indexOf(",")-1)
          })   
        );
        setCharacters(user)
      }); 
    }
  }, []);

  function addRankingToDatabase(){
    fetch("/rankings", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          user_id: user,
          rank: characters
    }),
    });
    setEdit(false);
  }
  
  function editRankingInDatabase(){
    fetch("/rankings/" + rank.id, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          user_id: user,
          rank: characters
    }),
    });

    setEdit(false);
  }
  
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const character = Array.from(characters);
    const [reorderedItem] = character.splice(result.source.index, 1);
    character.splice(result.destination.index, 0, reorderedItem);

    setCharacters(character);
  }

  return (
    <Grid container sx={{ maxWidth: 375, border: 3}}>
      <Stack>
        <h1>{(rank === null) ? ("Rank the Characters") : ("Edit Characters Ranking")}</h1>
        <Button 
          variant="contained" 
          startIcon={(rank === null) ? (<AddCircleIcon/>) : (<EditIcon/>)}
          onClick={handleClickEdit}
          style={{maxWidth: '200px', maxHeight: '100px'}}
        >
          {(rank === null) ? ("Add Ranking") : ("Edit Ranking")}
        </Button>
        <Dialog open={edit} onClose={handleClickEdit}>
          <DialogTitle>{(rank === null) ? ("Add Ranking") : ("Edit Ranking")}</DialogTitle>
            <DialogActions>
              <Button 
                onClick={(rank === null) ? addRankingToDatabase : editRankingInDatabase}>
                {(rank === null) ? ("Add") : ("Edit")}</Button>
              <Button onClick={handleCloseEdit}>Cancel</Button>
            </DialogActions>
        </Dialog>
      </Stack>
      <Stack>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <Card 
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps}
                          sx={{minWidth: 150, maxWidth: 150, border: 3}} 
                          align='center'
                        >
                          <p>
                            {name}
                          </p>
                        </Card>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </Stack>
    </Grid>
  );
}

export default Ranking;