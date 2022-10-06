import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
  });

  const handleChangeValues = value => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditAeronave = () => {
    Axios.put("http://localhost:3002/edit", {
      id: editValues.id,
      name: editValues.name,

    }).then(() => {
      props.setListAircraft(
        props.listAircraft.map((value) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                name: editValues.name,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteAeronave = () => {
    Axios.delete(`http://localhost:3002/delete/${editValues.id}`).then(() => {
      props.setListAircraft(
        props.listAircraft.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Aircraft model"
            defaultValue={props.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteAeronave()}>
            Delete
          </Button>
          <Button color="primary" onClick={() => handleEditAeronave()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
  
  );
}