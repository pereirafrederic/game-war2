import "./styles.css";
import { Card, Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
const taille = 20;

const gridStyle = {
  display: "flex",
  minWith: (100 * 1.5) / taille + "%",
  minHeigth: (100 * 1.5) / taille + "%",
  maxWith: (100 * 1.5) / taille + "%",
  maxHeigth: (100 * 1.5) / taille + "%"
};

const containerStyle = {
  display: "flex"
};

const lignes: Array<number> = Array.from(Array(taille).keys());
const colonnes: Array<number> = Array.from(Array(taille).keys());

export default function App() {
  const getColor = (valueColonne: number, valueLigne: number) => {
    return valueColonne % 4
      ? valueLigne % 3
        ? "lightblue"
        : "green"
      : "yellow";
  };

  const getUniteColor = (valueColonne: number) => {
    return valueColonne % 5 ? "blue" : "red";
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {colonnes.map((valueColonne, index) => {
        return (
          <div key={index} style={containerStyle}>
            {lignes.map((valueLigne, index2) => (
              <div
                style={[
                  { gridStyle },
                  { backgroundColor: getColor(valueColonne, valueLigne) }
                ]}
              >
                <Card.Grid key={index2}>
                  {`${valueColonne} - ${valueLigne}`}
                  <Avatar.Group>
                    <Badge count={valueLigne}>
                      <Avatar
                        size="small"
                        icon={<UserOutlined />}
                        style={{ backgroundColor: getUniteColor(valueColonne) }}
                      />
                    </Badge>
                  </Avatar.Group>
                </Card.Grid>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
