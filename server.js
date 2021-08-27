const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const url = 'https://form.tarik-r.repl.co/';
let firstNames = require('./firstnames');
let lastNames = require('./lastnames');
const getPassword = require('./randompassword');
let password = require('./randompassword');
let emaildomain = [
  'yahoo.com', 
  'gmail.com' , 
  'hotmail.com', 
  'outlook.com', 
  'zoho.com',
  'aol.com',
  'hotmail.co.uk',
  'hotmail.fr',
  'msn.com',
  'yahoo.fr',
  'wanadoo.fr',
  'comcast.net',
  'yahoo.co.uk',
  'live.com',
  'yandex.ru',
  'hotmail.it',
  'verizon.net',
  'att.net',
  'yahoo.ca',
  'yahoo.com.au',
  'rambler.ru',
  'yahoo.co.jp'
];


//aleksandar url
//const url2 = 'https://www.maybellinetesting.com/'

//herocu form app
const url2 = 'https://formapi1.herokuapp.com/';


async function bambam() {
  
  try{
    const browser = await puppeteer.launch({ headless: true, defaultViewport: null });
  // await page.setViewport({ width: 1366, height: 768});
  const [page] = await browser.pages();
  let counter = 3000;
  let firstname;
  let lastname;
  let email;
  
  
  

  while (counter--) {
    //--------ne diraj---//
    console.log(counter);//
    //-------------------//
    
    firstname = firstNames[Math.floor(Math.random() * firstNames.length-1)];
    lastname = lastNames[Math.floor(Math.random() * lastNames.length-1)];

    email = firstname.toLowerCase() + lastname.substring(1, 4).toLowerCase() + Math.floor(Math.random() * 100) + '@'+emaildomain[Math.floor(Math.random() * emaildomain.length)] ;


    //===========================================//
    console.log(firstname, lastname, password);  //
    //===========================================//
    password = getPassword();
    console.log(password);
    console.log(email);

    
    
    await page.goto(url2);
    //=====================================================================
    await page.type('#firstname', `${firstname}`);
    await page.type('#lastname', `${lastname}`);
    await page.type('#email', `${email}`);
    await page.type('#password', `${password}`);
    await page.click('#checkbox');
    await page.click('.btn-primary').then(console.log('+1 POST REQUEST'));
    //===================================================================== 
    //=====================================================================
    //za druge forme da ovu ne diram
    // await page.type('input.form-field', `lazni.email@gmail.com`);
    // await page.type('.form-area-field', 'asdasdasdasdsadasdsadsadsadas');
    // await page.click('button').then(console.log('+1 POST REQUEST'));


    //=====================================================================
    await page.waitForTimeout(0);
    
    
  }

  await browser.close();

  } catch(error) {
    console.log('PREKINUT PROCESS U CATCH BLOCKU!!!!!');
    process.restart();
    
  }

  // finally{
    
  //   process.on();
  // }
  
}

bambam();







