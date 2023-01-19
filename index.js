(async () => {
  const PAUSE_BETWEEN = 5 * 1000;
  const PAUSE_TAB = 10 * 1000;
  const PAUSE_MINING = 20 * 1000;


  while (1) {

    // Manage Barons
    console.log('Manage Barons ...');

    buttonCraft = document.querySelector("nav > div > div > div.flex.items-between.lg\\:justify-between.flex-1.gap-4 > ul > li:nth-child(4) > p > span");
    if (buttonCraft != null) { buttonCraft.click(); }
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonBaron = document.querySelector("img[src='/_next/image?url=%2Fimg%2Fheader%2Fbarons.png&w=256&q=75']");
    if(buttonBaron != null) { buttonBaron.click(); }

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Barons
    const buttonBaronMint = document.querySelector("div:nth-child(4) > div > div > div.tooltip > button");
    
    if(buttonBaronMint != null && !buttonBaronMint.className.startsWith('cursor-not-allowed')) { 
      buttonBaronMint.click();
      console.log('... Minted Barons'); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
    else {await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));}
    
    // Recharge Barons
    // const buttonBaronRecharge = document.querySelector("#header > div.mt-\\[380px\\].md\\:mt-\\[550px\\] > div > div:nth-child(4) > div > button");
    // if(buttonBaronRecharge != null && !buttonBaronRecharge.className.startsWith('cursor-not-allowed')) { 
    //   buttonBaronRecharge.click(); 
    //   console.log('... Recharged Barons'); 
    //   await new Promise((res) => setTimeout(res, PAUSE_MINING));
    // }
    // else {await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));}





    // Manage Castles
    console.log('Manage Castles ...');

    buttonCraft = document.querySelector("nav > div > div > div.flex.items-between.lg\\:justify-between.flex-1.gap-4 > ul > li:nth-child(4) > p > span");
    if(buttonCraft != null) { buttonCraft.click(); }
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonCastle = document.querySelector("img[src='/_next/image?url=%2Fimg%2Fheader%2Fcastles.png&w=256&q=75']");
    if(buttonCastle != null) { buttonCastle.click(); }

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Castles
    const buttonCastleMint = document.querySelector("div:nth-child(4) > div > div > div.tooltip > button");
    
    if(buttonCastleMint != null && !buttonCastleMint.className.startsWith('cursor-not-allowed')) { 
      buttonCastleMint.click(); 
      console.log('... Minted Castles'); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
    else {await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));}

    // Recharge Castles
    // const buttonCastleRecharge = document.querySelector("#header > div.mt-\\[380px\\].md\\:mt-\\[500px\\] > div > div:nth-child(4) > div > button");
    // if(buttonCastleRecharge != null && !buttonCastleRecharge.className.startsWith('cursor-not-allowed')) { 
    //   buttonCastleRecharge.click(); 
    //   console.log('... Minted Castles'); 
    //   await new Promise((res) => setTimeout(res, PAUSE_MINING));
    // }
    // else {await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));}




    // Manage Lumberjacks
    console.log('Manage Lumberjacks ...');

    buttonCraft = document.querySelector("nav > div > div > div.flex.items-between.lg\\:justify-between.flex-1.gap-4 > ul > li:nth-child(4) > p > span");
    if(buttonCraft != null) { buttonCraft.click(); }
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonLumber = document.querySelector("img[src='/_next/image?url=%2Fimg%2Fheader%2Flumberjacks.png&w=256&q=75']");
    if(buttonLumber != null) { buttonLumber.click(); }

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Lumberjack
    const buttonLumberMint = document.querySelector("#header > div.mt-\\[380px\\].md\\:mt-\\[500px\\] > div > div:nth-child(4) > div > div > div > button");
    if(buttonLumberMint != null && !buttonLumberMint.className.startsWith('cursor-not-allowed')) { 
      buttonLumberMint.click(); 
      console.log('... Minted Castles'); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
    else {await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));}
    



    // Manage Lumberjacks
    console.log('Manage Lumberjacks ...');

    buttonCraft = document.querySelector("div:nth-child(4) > div > div > div.tooltip > button");
    if(buttonCraft != null) { buttonCraft.click(); }
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonCarpenter = document.querySelector("img[src='/_next/image?url=%2Fimg%2Fheader%2Fcarpenters.png&w=256&q=75']");
    if(buttonCarpenter != null) { buttonCarpenter.click(); }

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Carpenters
    console.log('Manage Carpenters ...');

    const buttonCarpenterMint = document.querySelector("div:nth-child(4) > div > div > div.tooltip > button");
    if(buttonCarpenterMint != null && !buttonCarpenterMint.className.startsWith('cursor-not-allowed')) { 
      buttonCarpenterMint.click(); 
      console.log('... Minted Carpenters'); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
    else {await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));}



    // Manage Battles
    console.log('Manage Battles ...');

    buttonDungeons = document.querySelector("div > div.flex.items-between.lg\\:justify-between.flex-1.gap-4 > ul > li:nth-child(6) > p > span");
    
    if (buttonDungeons != null) {buttonDungeons.click();}
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonHeroBattle = document.querySelector("li:nth-child(3) > div > div > span > span");
    
    if (buttonHeroBattle != null) {buttonHeroBattle.click();}

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Battles
    timeToBattle = document.querySelector("#fight-now > button");
    if (timeToBattle != null && timeToBattle.innerText === "Daily Battle")
    {
      const buttonAutoBattle = document.querySelector("#auto-daily-battle > button");
      if (buttonAutoBattle != null) {buttonAutoBattle.click();}
      
      await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

      const buttonAutoBattleAccept = document.querySelector("div > div > div.mt-5 > button");
      if (buttonAutoBattleAccept != null) {buttonAutoBattleAccept.click();}
      console.log('... Autobattle executed'); 

      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }



    // Manage Tomes
    console.log('Manage Monster Tomes ...');

    buttonDungeons = document.querySelector("div > div.flex.items-between.lg\\:justify-between.flex-1.gap-4 > ul > li:nth-child(6) > p > span");

    if (buttonDungeons != null) {buttonDungeons.click();}
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonTomes = document.querySelector("li:nth-child(2) > div > div > span > span");
    
    if (buttonTomes != null) {buttonTomes.click();}

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Tomes
    const buttonTomesMint = document.querySelector("div > div > div.tooltip > button");
    
    if(buttonTomesMint != null && !buttonTomesMint.className.startsWith('cursor-not-allowed')) { 
      buttonTomesMint.click(); 
      console.log('... Minted Monster Tomes'); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
    else {await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));}

  }
})();
