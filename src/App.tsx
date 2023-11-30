import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-600, 0, 600], [2, 1, 0.1]);

  return (
    <Wrapper>
      <Box style={{ x, scale: scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;

// drappging
