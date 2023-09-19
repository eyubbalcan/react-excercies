import React, { useState } from "react";

const TodoList = () => {
  const [newItem, setNewItem] = useState();
  const [items, setItems] = useState([]);

  const todoEkle = () => {
    if (!newItem) {
      alert("Boş");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">TodoList App</h1>

        <input
          type="text"
          placeholder="Görevinizi yazınız."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn-sm" onClick={() => todoEkle()}>
          Ekle
        </button>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button className="btn-li" onClick={() => deleteItem(item.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <style>
        {` 
        body{
          color: #456
          background: #6564aa
        }

        .todo-container{
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 800px;
            height: 500px;
            position: relative;
            margin: auto;
            border: 1px solid #eee;
        }

        .todo-container input{
          text-align: center;
          position: relative;
          margin: 0 55px;
      }

      .todo-container btn-sm{
        text-align: center;
        position: relative;
        margin: 5px auto;
        width: 80px;
        border-radius: 3px;
    }
    .todo-container btn-li{
      text-align: center;
      position: relative;
      margin: 5px 10px;
      width: 10px;
      border-radius: 3px;
  }

    
    .todo-container li{
      color: white;
      list-style-type:none;
  }
      
        `}
      </style>
    </>
  );
};

export default TodoList;
