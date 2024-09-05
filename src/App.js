import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";
import { setRoomName } from "./redux/slices/roomSlice";
import { addPlayer } from "./redux/slices/playersSlice";

const App = () => {

  // Selectors
  const players = useSelector((state) => state.players);
  const room = useSelector((state) => state.room);
  const count = useSelector((state) => state.counter.value);

  // State
  const [tmpRoomName, setTmpRoomName] = useState("");

  // Dispatch
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* Players */}
            <pre>{JSON.stringify(players, null, 2)}</pre>
            <Button
              variant="outlined"
              onClick={() =>
                dispatch(
                  addPlayer({
                    id: count,
                    name: "Matheus",
                  })
                )
              }
            >
              Add player
            </Button>
          </Grid>
          <Grid item xs={4}>
            {/* Room */}
            <TextField
              id="outlined-basic"
              label="Room name"
              name="roomName"
              variant="outlined"
              value={tmpRoomName}
              onChange={(e) => setTmpRoomName(e.target.value)}
            />

            <Button
              variant="outlined"
              onClick={() => dispatch(setRoomName(tmpRoomName))}
            >
              Save
            </Button>

            <span>Room name: {room.name}</span>
          </Grid>
          <Grid item xs={4}>
            {/* Counter */}
            <Button variant="outlined" onClick={() => dispatch(increment())}>
              Increment
            </Button>
            <span>{count}</span>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
