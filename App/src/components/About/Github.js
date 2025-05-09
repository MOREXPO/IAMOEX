import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Días que <strong className="purple">programo</strong>
      </h1>
      <GitHubCalendar
        username="MOREXPO"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        labels={{
          "months": [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
          ],
          "weekdays": [
            "Do",
            "Lu",
            "Ma",
            "Mi",
            "Ju",
            "Vi",
            "Sa"
          ],
          "totalCount": "{{count}} contribuciones en {{year}} ",
          "legend": {
            "less": "Menos",
            "more": "Más"
          }
        }}
      />
    </Row>
  );
}

export default Github;
