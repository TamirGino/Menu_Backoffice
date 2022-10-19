import React, { useState, useEffect } from "react";
import HelpButtons from "./components/Other/HelpButtons";
import Menu from "./components/Menu/Menu";

function App() {
  const FOOD = [
    {
      title: "Appetizers",
      content: [
        {
          name: "Bread",
          price: "32",
        },
        {
          name: "Nachos",
          price: "38",
        },
      ],
    },
    {
      title: "Sushi",
      content: [
        {
          name: "Roll One",
          price: "62",
        },
        {
          name: "Roll Two",
          price: "57",
        },
        {
          name: "Roll Three",
          price: "54",
        },
      ],
    },
    {
      title: "Main Courses",
      content: [
        {
          name: "Steak",
          price: "140",
        },
        {
          name: "Burger",
          price: "78",
        },
      ],
    },
    {
      title: "Side Dish",
      content: [
        {
          name: "French Fries",
          price: "25",
        },
        {
          name: "Green Beans",
          price: "22",
        },
      ],
    },
  ];

  const Drinks = [
    {
      title: "Soft Drinks",
      content: [
        {
          name: "Cola Zero",
          price: "8",
        },
        {
          name: "Sprite",
          price: "8",
        },
        {
          name: "Soda",
          price: "4",
        },
      ],
    },
    {
      title: "Wine",
      content: [
        {
          name: "Cabarne",
          price: "80",
        },
        {
          name: "Syra",
          price: "90",
        },
      ],
    },
    {
      title: "Beers",
      content: [
        {
          name: "Stela",
          price: "25",
        },
        {
          name: "Corona",
          price: "28",
        },
      ],
    },
    {
        title: "Cocktails",
        content: [
          {
            name: "Margarita",
            price: "49",
          },
          {
            name: "Mojito",
            price: "46",
          },
          {
            name: "Martini",
            price: "52",
          },
        ],
      },
  ];

  return (
    <div>
      <HelpButtons />

      <Menu foodMenu={FOOD} drinksMenu={Drinks}/>
    </div>
  );
}

export default App;
