(async () => {
    const PAUSE_BETWEEN = 3 * 1000;
    const PAUSE_MINING = 10 * 1000;

    const ManageBarons = true;
    const ManageCastles = true;
    const ManageLumberjacks = true;
    const ManageCarpenters = true;
    const ManageMiners = true;
    const ManageTomes = true;
    const ManageBattles = true;
    const ManageLoot = false;

    const ButtonTopMenuCraft = "div > div.flex.items-between.lg\\:justify-between.flex-1.gap-4 > ul > li:nth-child(4) > p > span";
    const ButtonTopMenuDungeons = "div > div.flex.items-between.lg\\:justify-between.flex-1.gap-4 > ul > li:nth-child(6) > p > span";
    
    while (1) {
        if (ManageBarons) {
            /* 
            *   Manage Barons
            */
            // Navigate to Barons
            console.log("Manage Barons ...");
            clickButton(ButtonTopMenuCraft);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonTopMenuItemBaron = "li:nth-child(1) > div > div > span > img";
            clickButton(ButtonTopMenuItemBaron);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            // Mint stuff
            const ButtonBaronsMint = "div:nth-child(4) > div > div > div.tooltip > button";
            waitTime = clickActiveButton(ButtonBaronsMint, "Barons");
            await new Promise((res) => setTimeout(res, waitTime));
        }

        if (ManageCastles) {
            /* 
            *   Manage Castles
            */
            // Navigate to Castles
            console.log("Manage Castles ...");
            clickButton(ButtonTopMenuCraft);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonTopMenuItemCastles = "li:nth-child(2) > div > div > span > img";
            clickButton(ButtonTopMenuItemCastles);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            // Mint stuff
            const ButtonCastlesMint = "div:nth-child(4) > div > div > div.tooltip > button";
            waitTime = clickActiveButton(ButtonCastlesMint, "Castles");
            await new Promise((res) => setTimeout(res, waitTime));
        }

        if (ManageLumberjacks) {
            /* 
            *   Manage Lumberjacks
            */
            // Navigate to Lumberjacks
            console.log("Manage Lumberjacks ...");
            clickButton(ButtonTopMenuCraft);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonTopMenuItemLumberjacks = "li:nth-child(3) > div > div > span > img";
            clickButton(ButtonTopMenuItemLumberjacks);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            // Mint stuff
            const ButtonLumberjacksMint = "div:nth-child(4) > div > div > div.tooltip > button";
            waitTime = clickActiveButton(ButtonLumberjacksMint, "Lumberjacks");
            await new Promise((res) => setTimeout(res, waitTime));
        }

        if (ManageCarpenters) {
            /* 
            *   Manage Carpenters
            */
            // Navigate to Carpenters
            console.log("Manage Carpenters ...");
            clickButton(ButtonTopMenuCraft);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonTopMenuItemCarpenters = "li:nth-child(4) > div > div > span > img";
            clickButton(ButtonTopMenuItemCarpenters);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            //Mint stuff
            const ButtonCarpentersMint = "div:nth-child(4) > div > div > div.tooltip > button";
            waitTime = clickActiveButton(ButtonCarpentersMint, "Carpenters");
            await new Promise((res) => setTimeout(res, waitTime));
        }

        if (ManageMiners) {
            /* 
            *   Manage Miners
            */
            // Navigate to Miners
            console.log("Manage Miners ...");
            clickButton(ButtonTopMenuCraft);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonTopMenuItemCarpenters = "li:nth-child(5) > div > div > span > img";
            clickButton(ButtonTopMenuItemCarpenters);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            //Mint stuff
            const ButtonMinersMint = "div:nth-child(4) > div > div > div.tooltip > button";
            waitTime = clickActiveButton(ButtonMinersMint, "Carpenters");
            await new Promise((res) => setTimeout(res, waitTime));
        }

        if (ManageTomes) {
            /* 
            *   Manage Tomes
            */
            // Navigate to Tomes
            console.log("Manage Tomes ...");
            clickButton(ButtonTopMenuDungeons);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonTopMenuItemTomes ="li:nth-child(2) > div > div > span > img";
            clickButton(ButtonTopMenuItemTomes);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            // Mint Stuff
            const ButtonTomesMint = "div > div > div.tooltip > button";
            clickActiveButton(ButtonTomesMint, "Tomes");

            const packIcons = document.querySelectorAll("#tooltip-low-and-high-bounties > span:nth-child(2) > img");
            for(let i=0; i<3; i++) {
                packetCount = document.querySelector(`div > div:nth-child(${i+1}) > small`);
                if(packetCount != null && packetCount.innerText != "0") {
                    console.log('Collect Packages ...');
                    if (packIcons[i] != null) {
                        packIcons[i].click();
                        await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
        
                        packOpenAll = document.querySelector("div > section > aside > div");
                        if (packOpenAll != null) {
                            packOpenAll.click();
                            await new Promise((res) => setTimeout(res, PAUSE_MINING));
        
                            packClaimAll = document.querySelector("div > section > aside > div");
                            if (packClaimAll != null) {
                                packClaimAll.click();
                                await new Promise((res) => setTimeout(res, PAUSE_MINING));
                            }
                        }
                    }   
                }  
            }
        }

        if (ManageBattles) {
            /* 
            *   Manage Battles
            */
            // Navigate to Battles
            console.log("Manage Battles ...");
            clickButton(ButtonTopMenuDungeons);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonTopMenuItemBattles = "li:nth-child(3) > div > div > span > img";
            clickButton(ButtonTopMenuItemBattles);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            //Mint stuff
            const ButtonLoadMore = "div.self-center.lg\\:self-end > button > div > div";
            clickButton(ButtonLoadMore);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonCarousselLeft = "#carousel_controls > div.absolute.z-30.w-\\[45px\\].h-\\[45px\\].mt-10.-left-10.md\\:-left-14.-scale-x-100.cursor-pointer > span > img";
            clickButton(ButtonCarousselLeft);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            timeToBattle = document.querySelector("#fight-now > button");
            if (timeToBattle != null && timeToBattle.innerText === "Daily Battle") {
                const ButtonAutoBattle = document.querySelector("#auto-daily-battle > button");
                if (ButtonAutoBattle != null) {
                    for(let i=0; i<3; i++) {
                        ButtonAutoBattle.click();
                        await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
                    }
                }
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

                const ButtonAutoBattleAccept = document.querySelector("div > div > div.mt-5 > button");
                if (ButtonAutoBattleAccept != null) {ButtonAutoBattleAccept.click();}
                    console.log('... Autobattle executed'); 

                    await new Promise((res) => setTimeout(res, PAUSE_MINING));
            }

            // BossBattle
            const ButtonBossBattle = "#auto-boss-battle-desktop > button"
            clickButton(ButtonBossBattle);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
            availableBossBattles = document.querySelector("div > select > option:nth-child(1)").innerText.split("(").pop().split(" of")[0];
            if (availableBossBattles != "0") {
                const ButtonBattleAll = "div > div > div.mt-5 > button";
                waitTime = clickActiveButton(ButtonBattleAll, "BossBattle");
                await new Promise((res) => setTimeout(res, waitTime));
            }
            else {
                buttonClose = document.querySelectorAll("div > button.absolute")[1];
                buttonClose.click();
                await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
            }

            // AutoRest
            //TODO
        }

        if (ManageLoot) {
            /* 
            *   Manage Loot
            */
            // Navigate to Loot
            console.log("Manage Loot ...");
            clickButton(ButtonTopMenuDungeons);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            const ButtonTopMenuItemLoot = "li:nth-child(4) > div > div";
            clickButton(ButtonTopMenuItemLoot);
            await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

            // Mint daily
            for(let i=3; i<8; i++) {
                amountTreasure = document.querySelector(`#lastrewards > section:nth-child(5) > div:nth-child(${i}) > div > span:first-child`).innerText.split("x")[0];
                if(amountTreasure != null && amountTreasure > 0) {
                    console.log(i-3 + " = " + amountTreasure + " will be minted");
                    buttonOpen = `#lastrewards > section:nth-child(5) > div:nth-child(${i}) > button`;
                    clickButton(buttonOpen);
                    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

                    buttonOpenDialog = `div > div > div:nth-child(4) > button`;
                    clickButton(buttonOpenDialog);
                    await new Promise((res) => setTimeout(res, PAUSE_MINING));
                }
            }
            
            // Mint TODO
        }
    }


    function clickButton(path) {
        buttonClick = document.querySelector(path);
        if (buttonClick != null) { 
            buttonClick.click(); 
        }
        else {
            console.log('Button not active! -> ' + path);
        }
    }

    function clickActiveButton(path, name) {
        buttonClick = document.querySelector(path);
        if (buttonClick != null && !buttonClick.className.startsWith('cursor-not-allowed')) { 
            buttonClick.click(); 
            console.log(name + " ... minted");
            return PAUSE_MINING;
        }
        else {
            console.log('Button not active! -> ' + path);
            return PAUSE_BETWEEN;
        }
    }
})();