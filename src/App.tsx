import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled(motion.button)`
  height: 30px;
  width: 55px;
  position: absolute;
  top: 85%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: white;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 50px;
  width: 50px;
`;

const boxVariants = {
  hover1: { scale: 1.1, x: -17, y: -10 },
  hover2: { scale: 1.1, x: 17, y: -10 },
  hover3: { scale: 1.1, x: -17, y: 10 },
  hover4: { scale: 1.1, x: 17, y: 10 },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box
            custom={n}
            variants={boxVariants}
            whileHover={`hover${n}`}
            onClick={() => setId(n)}
            key={n}
            layoutId={n}
          >
            {(n === "2" && !clicked) || (n === "3" && clicked) ? (
              <Circle layoutId="circle" style={{ borderRadius: 50 }} />
            ) : null}
          </Box>
        ))}
      </Grid>
      {!clicked ? (
        <Button
          layoutId="switch"
          style={{ scale: 1, color: "#292fa7" }}
          onClick={toggleClicked}
        >
          Switch
        </Button>
      ) : null}
      {clicked ? (
        <Button
          layoutId="switch"
          style={{ scale: 1.2, color: "#e60606" }}
          onClick={toggleClicked}
        >
          Switch
        </Button>
      ) : null}
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
