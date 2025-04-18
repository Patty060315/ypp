let input;
let slider;
let button;
let dropdown;
let iframe;
let isBouncing = false;

function setup() {  //這是一個設定的函數，只會執行一次
  //產生一個畫布，充滿整個視窗，背景顏色為#ffcad4(買回來的圖畫紙)
  createCanvas(windowWidth, windowHeight);
  background('#ffcad4');
  
  // 產生一個輸入文字框，並顯示在座標(10, 10)的位置，寬300，高80
  input = createInput(); // 產生一個輸入文字框
  input.position(10, 10);
  input.size(300, 80); // 設定輸入框的寬高
  input.style('font-size', '24px'); // 設定文字大小
  input.style('background-color', '#f8b595'); // 設定背景顏色
  input.value("🍭🍒🌼"); // 設定輸入框的預設文字
  
  // 產生一個滑桿，並顯示在座標(320, 10)，寬100
  slider = createSlider(12, 40, 32); // 設定滑桿的最小值、最大值和初始值
  slider.position(380, 25);
  slider.style('width', '200px');
  
  // 產生一個按鈕，並顯示在座標(680, 10)，寬100，高50
  button = createButton('跳動');
  button.position(680, 10);
  button.size(100, 50);
  button.mousePressed(toggleBounce);
  button.style('font-size', '24px');
  button.style('background-color', '#ffcad4');
  
  // 產生一個下拉式選單，並顯示在座標(800, 10)，寬100
  dropdown = createSelect();
  dropdown.position(800, 10);
  dropdown.size(100);
  dropdown.option('淡江大學');
  dropdown.option('教育科技系');
  dropdown.changed(changeIframe);

  // 產生一個 iframe，顯示在視窗中間，寬為視窗寬度-20，高為視窗高度-20
  iframe = createElement('iframe');
  iframe.position(10, 100);
  iframe.size(windowWidth - 20, windowHeight - 120);
  iframe.attribute('src', 'https://www.tku.edu.tw/');
}

function toggleBounce() {
  isBouncing = !isBouncing;
}

function changeIframe() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    iframe.attribute('src', 'https://www.tku.edu.tw/');
  } else if (selected === '教育科技系') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw/');
  }
}

function draw() { //這是一個畫圖的函數，會一直執行
  background('#ffcad4'); // 設定背景顏色
  let textSizeValue = slider.value(); // 獲取滑桿的值
  textSize(textSizeValue); // 設定文字大小
  textAlign(LEFT, TOP);
  fill(0);
  stroke(0);
  strokeWeight(1);
  fill('#33415c');

  let textContent = input.value(); // 獲取輸入框中的文字內容
  let contentWidth = textWidth(textContent + " ");
  let contentHeight = textAscent() + textDescent();
  
  for (let y = 0; y < height; y += contentHeight) {
    let yOffset = isBouncing ? random(-5, 5) : 0;
    for (let x = 0; x < width; x += contentWidth) {
      text(textContent, x, y + yOffset);
    }
  }
}
