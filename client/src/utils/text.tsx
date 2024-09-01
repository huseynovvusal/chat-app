import React from "react"

export const formattedMultilineText = (text: string) =>
  text.split("\n").map((str, index) => (
    <React.Fragment key={index}>
      {str}
      <br />
    </React.Fragment>
  ))
