import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import Draggable from "react-draggable";
export default function App() {
  const [board, setBoard] = useState([]);

  return (
    <div>
      <Header />
      <div style={styles.boardContainer}>
        {board.map((list) => {
          return (
            <div
              id={`list_${list.id}`}
              key={list.id}
              className="list-container"
              style={styles.listContainer}
            >
              <h2>{list.title}</h2>
              <button
                style={styles.newCard}
                onClick={() => {
                  let temp_boards = [...board];
                  for (let i = 0; i < temp_boards.length; i++) {
                    if (temp_boards[i].id === list.id) {
                      temp_boards[i].cards.push({
                        id: new Date().getTime(),
                        title: "New Card",
                        description: "New Card Description",
                      });
                    }
                  }
                  setBoard(temp_boards);
                }}
              >
                + New Card
              </button>
              {list.cards.map((card) => {
                return (
                  <Draggable
                    key={card.id}
                    onStop={(e) => {
                      let allLists =
                        document.querySelectorAll(".list-container");
                      for (let i = 0; i < allLists.length; i++) {
                        let list = allLists[i];
                        let rect = list.getBoundingClientRect();
                        let data = {
                          x: e.clientX,
                          y: e.clientY,
                        };
                        let flag = false;
                        if (
                          data.x > rect.left &&
                          data.x < rect.right &&
                          data.y > rect.top &&
                          data.y < rect.bottom
                        ) {
                          let final_list_id = list.id.split("_")[1];
                          let final_card_id = card.id;
                          let temp_boards = [...board];
                          for (
                            let boardIndex = 0;
                            boardIndex < temp_boards.length;
                            boardIndex++
                          ) {
                            for (
                              let cardIndex = 0;
                              cardIndex < temp_boards[boardIndex].cards.length;
                              cardIndex++
                            ) {
                              if (
                                temp_boards[boardIndex].cards[cardIndex].id ===
                                final_card_id
                              ) {
                                temp_boards[boardIndex].cards.splice(
                                  cardIndex,
                                  1
                                );
                              }
                            }
                          }
                          for (
                            let boardIndex = 0;
                            boardIndex < temp_boards.length;
                            boardIndex++
                          ) {
                            if (
                              temp_boards[boardIndex].id ===
                              parseInt(final_list_id)
                            ) {
                              temp_boards[boardIndex].cards.push(card);
                            }
                          }
                          flag = true;
                          setBoard(temp_boards);
                        }
                      }
                    }}
                  >
                    <div style={styles.cardContainer}>
                      <input
                        type={"text"}
                        style={styles.title}
                        value={card.title}
                        onChange={(e) => {
                          let temp_boards = [...board];
                          for (let i = 0; i < temp_boards.length; i++) {
                            for (
                              let j = 0;
                              j < temp_boards[i].cards.length;
                              j++
                            ) {
                              if (temp_boards[i].cards[j].id === card.id) {
                                temp_boards[i].cards[j].title = e.target.value;
                              }
                            }
                          }
                          setBoard(temp_boards);
                        }}
                      />
                      <input
                        type={"text"}
                        style={styles.description}
                        value={card.description}
                        onChange={(e) => {
                          let temp_boards = [...board];
                          for (let i = 0; i < temp_boards.length; i++) {
                            for (
                              let j = 0;
                              j < temp_boards[i].cards.length;
                              j++
                            ) {
                              if (temp_boards[i].cards[j].id === card.id) {
                                temp_boards[i].cards[j].description =
                                  e.target.value;
                              }
                            }
                          }
                          setBoard(temp_boards);
                        }}
                      />
                    </div>
                  </Draggable>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
