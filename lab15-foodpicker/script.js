"use strict";

const foods = [
  { name: "ข้าวมันไก่", description: "ข้าวมันหอม ๆ เสิร์ฟพร้อมไก่นุ่มและน้ำจิ้มรสเด็ด", price: 55, image: "images/food-1.jpg" },
  { name: "ผัดกะเพรา", description: "กะเพราหอมเผ็ดกำลังดี เสิร์ฟกับข้าวสวยร้อน ๆ", price: 60, image: "images/food-2.jpg" },
  { name: "ต้มยำกุ้ง", description: "ต้มยำรสจัดจ้าน หอมสมุนไพรและกุ้งสด", price: 120, image: "images/food-3.jpg" },
  { name: "ผัดไทย", description: "เส้นผัดซอสมะขาม โรยถั่วและมะนาว", price: 65, image: "images/food-4.jpg" },
  { name: "ข้าวผัดกุ้ง", description: "ข้าวผัดหอมกระทะ ใส่กุ้งและผักสด", price: 70, image: "images/food-5.jpg" },
  { name: "ส้มตำไทย", description: "มะละกอกรอบ คลุกน้ำปรุงเปรี้ยวหวาน", price: 55, image: "images/food-6.jpg" }
];

const image = document.getElementById("food-image");
const name = document.getElementById("food-name");
const description = document.getElementById("food-description");
const price = document.getElementById("food-price");
const status = document.getElementById("status");
const randomButton = document.getElementById("random-btn");
let currentIndex = 0;

function showFood(index) {
  const food = foods[index];
  image.src = food.image;
  image.alt = `ภาพประกอบ${food.name}`;
  name.textContent = food.name;
  description.textContent = food.description;
  price.textContent = food.price;
  status.textContent = `สุ่มจากทั้งหมด ${foods.length} เมนู`;
}

randomButton.addEventListener("click", () => {
  // Avoid repeating the previous item when there are multiple choices.
  const offset = 1 + Math.floor(Math.random() * (foods.length - 1));
  currentIndex = (currentIndex + offset) % foods.length;
  showFood(currentIndex);
});
