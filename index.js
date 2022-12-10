(async () => {
  const PAUSE_BETWEEN = 10 * 1000;
  const PAUSE_TAB = 20 * 1000;
  const PAUSE_MINING = 30 * 1000;


  while (1) {

    // Manage Barons
    console.log('Manage Barons ...');

    buttonCraft = document.querySelector(
      "span.flex.flex-center.justify-center.gap-2.titleDropDown"
    );
    buttonCraft.click();
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonBaron = document.querySelector("img[src='/_next/image?url=%2Fimg%2Fheader%2Fbarons.png&w=256&q=75']");
    if(buttonBaron != null) { buttonBaron.click(); }

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Barons
    const buttonBaronMint = document.querySelector("button.caramel-gradient--border.rounded-\\[15px\\].p-\\[4px\\].max-w-sm.max-h-sm.transition-colors.duration-700");
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

    buttonCraft = document.querySelector("span.flex.flex-center.justify-center.gap-2.titleDropDown");
    if(buttonCraft != null) { buttonCraft.click(); }
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonCastle = document.querySelector("img[src='/_next/image?url=%2Fimg%2Fheader%2Fcastles.png&w=256&q=75']");
    if(buttonCastle != null) { buttonCastle.click(); }

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Castles
    const buttonCastleMint = document.querySelector("#header > div.mt-\\[380px\\].md\\:mt-\\[500px\\] > div > div:nth-child(4) > div > div > div > button");
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

    buttonCraft = document.querySelector("span.flex.flex-center.justify-center.gap-2.titleDropDown");
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
    



    // Manage Carpenters
    console.log('Manage Carpenters ...');

    buttonCraft = document.querySelector("span.flex.flex-center.justify-center.gap-2.titleDropDown");
    if(buttonCraft != null) { buttonCraft.click(); }
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonCarpenter = document.querySelector("img[src='/_next/image?url=%2Fimg%2Fheader%2Fcarpenters.png&w=256&q=75']");
    if(buttonCarpenter != null) { buttonCarpenter.click(); }

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Lumberjack
    const buttonCarpenterMint = document.querySelector("#header > div.mt-\\[380px\\].md\\:mt-\\[500px\\] > div > div:nth-child(4) > div > div > div > button");
    if(buttonCarpenterMint != null && !buttonCarpenterMint.className.startsWith('cursor-not-allowed')) { 
      buttonCarpenterMint.click(); 
      console.log('... Minted Carpenters'); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
    else {await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));}



    // Manage Battles
    buttonDungeons = document.querySelector("#__next > div.container.oveflow-x-hidden > div > nav > div.z-40.absolute.w-full.h-24.md\\:h-48.min-w-max.bg-\\[url\\(\\'\\/img\\/background\\/headerbg\\.png\\'\\)\\].bg-center.bg-contain.md\\:bg-left-top.bg-repeat-x.mt-0.flex.items-center.justify-center.pb-12.md\\:pb-24.xl\\:px-12.px-4 > div > div.flex.items-between.lg\\:justify-between.flex-1.gap-4 > ul > li:nth-child(7) > p > span");
    if (buttonDungeons != null) {buttonDungeons.click();}
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const buttonHeroBattle = document.querySelector("#__next > div.container.oveflow-x-hidden > div > nav > div.z-10.absolute.w-full.bg-\\[\\#053654\\].lg\\:border-b.border-\\[\\#828282\\].h-screen.overflow-scroll.lg\\:h-auto.lg\\:overflow-auto > div > div.pl-14 > ul.hidden.lg\\:flex.lg\\:justify-evenly.lg\\:p-14.lg\\:pt-0 > li:nth-child(3) > div > div > span > img");
    if (buttonHeroBattle != null) {buttonHeroBattle.click();}

    await new Promise((res) => setTimeout(res, PAUSE_TAB));

    // Mint Battles
    timeToBattle = document.querySelector("#fight-now > button > div > div > p > span > span");
    if (timeToBattle.innerText === "00:00:00")
    {
      const buttonAutoBattle = document.querySelector("#auto-daily-battle > button");
      if (buttonAutoBattle != null) {buttonAutoBattle.click();}
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
  }
})();
