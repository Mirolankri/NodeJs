import { node } from "prop-types";
import Paper from "@mui/material/Paper";
import { useTheme } from "../../providers/ThemeProvider";

const Main = ({ children }) => {
  const{isDark,toggleDarkMode} = useTheme()
  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: isDark?"#004466":"#e3f2fd",
      }}>
      {children}
    </Paper>
  );
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
