/* Made by MaxTheGamer with help of VCraft and Quantum
===[ PocketCmd 1.4]===
REPORT BUGS TO: @tgct99 on TWITTER
Do not distribute without the written permision of SirMaxime. */
var ver = "1.4.0";
function newLevel(){
	ModPE.showTipMessage("§aThanks for using §6PocketCmd! §d:D");
	clientMessage("§6Welcome! PocketCmd "+ ver +" successfully loaded!\n§7Use \/help for a list of commands. \n§7Follow @tgct99 on Twitter for news! ");
  }
/* --<=>-- VAR + ITEMS --<=>-- */
var sa = false;
var spawnX = NaN && null;
var spawnY = NaN && null;
var spawnZ = NaN && null;
/* --<=>-- COMMANDS --<=>-- */
function procCmd (cmd) {
	cmd = cmd.toLowerCase();
	/* Changelog */
	if (cmd == "changelog"){
		clientMessage("§6PocketCmd "+ ver + "\n*Added \/setfov command.\n*Added \/setspawn\n*Added \/spawn\n*Added \/removent.\n*Added \/healent.\n*Added \/invisible.\n*Fixed bug with \/fly off. ");
	}
      //HELP
      if(cmd=="help" || cmd == "help 1" || cmd=="help1"){
		 clientMessage("§dHelp page 1 out of §e5. \n \/changelog -> A list of all changes in the latest update.\n \/cleari -> clear your inventory.\n \/coords -> View your current co-ordinates.\n \/credits -> Info about the mod.\n \/fly -> Enable or disable flying.");
	 }
	 if(cmd=="help 2" || cmd=="help2"){
		 clientMessage("§dHelp page 2 out of §e5.\n \/fastmine -> Enable or disable Fastmine.\n \/gamemode -> Change your gamemode. \n \/gamespeed -> Change the speed at which the game plays.\n \/heal -> Restore your health.\n \/healent -> Heal all entities.");
	 }
	 if(cmd=="help 3" || cmd=="help3"){
		 clientMessage("§dHelp page 3 out of §e5.\n \/invisible -> Become invisible.\n \/kill -> Commit suicide.\n \/kit -> Load a kit to play with.\n \/place -> Place down structures.\n \/removent -> Remove all nearby entities.");
	 }
	 if(cmd=="help 4" || cmd=="help4"){
		 clientMessage("§dHelp page 4 out of §e5.\n \/setfov -> Change your field of view.\n \/setspawn -> Set the spawn location to your current coords.\n \/spawn -> Teleport or get the spawn coords.\n \/speed -> Enable or disable speed boost.\n \/superattack -> Enable super attack.")
	 }
	 if(cmd=="help 5" || cmd=="help5"){
		 clientMessage("§dHelp page 5 out of §e5.\n \/time -> Change the time.")
	 }

	   /* CLEAR INVENTORY */
	   if (cmd == "cleari"){
	   clientMessage("§l§cThis will remove ALL items from your inventory!\n §c§l Type \"\/cleari now\" to clear it.");}
	   if (cmd == "cleari now"){
		   Player.clearInventorySlot(1);
		   Player.clearInventorySlot(2);
		   Player.clearInventorySlot(3);
		   Player.clearInventorySlot(4);
		   Player.clearInventorySlot(5);
		   Player.clearInventorySlot(6);
		   Player.clearInventorySlot(7);
		   Player.clearInventorySlot(8);
		   Player.clearInventorySlot(9);
		   Player.clearInventorySlot(10);
		   Player.clearInventorySlot(11);
		   Player.clearInventorySlot(12);
		   Player.clearInventorySlot(13);
		   Player.clearInventorySlot(14);
		   Player.clearInventorySlot(15);
		   Player.clearInventorySlot(16);
		   Player.clearInventorySlot(17);
		   Player.clearInventorySlot(18);
		   Player.clearInventorySlot(19);
		   Player.clearInventorySlot(20);
		   Player.clearInventorySlot(21);
		   Player.clearInventorySlot(22);
		   Player.clearInventorySlot(23);
		   Player.clearInventorySlot(24);
		   Player.clearInventorySlot(25);
		   Player.clearInventorySlot(26);
		   Player.clearInventorySlot(27);
		   Player.clearInventorySlot(28);
		   Player.clearInventorySlot(29);
		   Player.clearInventorySlot(30);
		   Player.clearInventorySlot(31);
		   Player.clearInventorySlot(32);
		   Player.clearInventorySlot(33);
		   Player.clearInventorySlot(34);
		   Player.clearInventorySlot(35);
		   Player.clearInventorySlot(36);
		   Player.clearInventorySlot(37);
		   Player.clearInventorySlot(38);
		   Player.clearInventorySlot(39);
		   Player.clearInventorySlot(40);
		   Player.clearInventorySlot(41);
		   Player.clearInventorySlot(42);
		   Player.clearInventorySlot(43);
		   Player.clearInventorySlot(44);
		   clientMessage("§bYour inventory has been cleared successfully!");
	   }
	   // HEAL
	   if (cmd == "heal"){
		   Player.setHealth(20);
		   clientMessage("§bYou have been health successfully.");
	   }
	   // Gamemode
	        if (cmd == "gamemode"){
			clientMessage("§7Available gamemodes\: \n -> \/gamemode s ->Survival \n -> \/gamemode c -> Creative."); }
		// Gamemode survival
		   if (cmd == "gamemode s"){
			   Level.setGameMode(0);
		   clientMessage("§bYour gamemode has been changed to Survival."); }
		//gamemode creative
		   if(cmd == "gamemode c"){
			   Level.setGameMode(1);
		   clientMessage("§bYour gamemode has been changed to Creative.");}
		//KILL
		if(cmd == "kill"){
			Player.setHealth(0);

		   clientMessage("§bYou died. Rest in peace. §oor respawn...");

		}
		// SPEED
		if (cmd=="speed"){
			clientMessage("§7Usage: \/speed normal:sprint:quick:fast:superfast");
		}
		if(cmd == "speed sprint"){
			Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*9999, 2, false, false);
			clientMessage("§bYour speed has increased to §esprint!");
		}
		if(cmd == "speed quick"){
			Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*9999, 4, false, false);
			clientMessage("§bYour speed has increased to §equick!");
		}
		if(cmd=="speed fast"){
			Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*9999, 6, false, false);
			clientMessage("§bYour speed has increased to §efast!");
		}
		if(cmd=="speed superfast"){
			Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 9999*9999, 12, false, false);
			clientMessage("§bYour speed has increased to §esuper fast!");
		}
		if(cmd == "speed normal") {
			Entity.removeEffect(getPlayerEnt(), MobEffect.movementSpeed);
			clientMessage("§bYou no longer move faster.");
		}

		//GODMODE
	/*	if(cmd == "god")
		 {
			Player.setHealth(32767);
			clientMessage("§bGodmode enabled. You won't die anymore.");
		 } */

        //KITS
        if(cmd =="kit")
		{
			clientMessage("§7Available kits\:\n\*Starter\n\*Fighter\n\*Pro\n\*Farmer\n\*Netherguy\n§eDo \/kit <kitname> to get a kit.");
		}
        //KIT -> Starter
        if(cmd =="kit starter"){
			Player.addItemInventory(4,64,0);
			Player.addItemInventory(268,1,0);
			Player.addItemInventory(267,1,0);
			Player.addItemInventory(268,1,0);
			Player.addItemInventory(269,1,0);
			Player.addItemInventory(270,1,0);
			Player.addItemInventory(271,1,0);
			clientMessage("§bThe Starter Kit has been obtained!");
		}
        if(cmd=="kit fighter"){
			Player.addItemInventory(261,1,0);
			Player.addItemInventory(262,128,0);
			Player.addItemInventory(267,1,0);
			Player.addItemInventory(259,1,0);
			Player.addItemInventory(260,64,0);
			clientMessage("§bThe Fighter Kit has been obtained.")
		}
		if(cmd=="kit pro"){
			Player.addItemInventory(264,32,0);
			Player.addItemInventory(276,1,0);
			Player.addItemInventory(277,1,0);
			Player.addItemInventory(278,1,0);
			Player.addItemInventory(279,1,0);
			Player.addItemInventory(364,64,0);
			Player.addItemInventory(310,1,0);
			Player.addItemInventory(311,1,0);
			Player.addItemInventory(312,1,0);
			Player.addItemInventory(313,1,0);
			clientMessage("§bThe Pro Kit has been obtained.");

		}
		if(cmd=="kit farmer"){
			Player.addItemInventory(292,1,0);
			Player.addItemInventory(295,15,0);
			Player.addItemInventory(361, 15, 0);
			Player.addItemInventory(362,15,0);
			Player.addItemInventory(391,15,0);
			Player.addItemInventory(392,15,0);
			clientMessage("§bThe Farmer kit has been obtained.");
		}
		if(cmd=="kit netherguy"){
			Player.addItemInventory(10, 32, 0);
			Player.addItemInventory(87, 64, 0);
			Player.addItemInventory(89, 32, 0);
			Player.addItemInventory(49, 15, 0);
			Player.addItemInventory(378, 12, 0);
			Player.addItemInventory(283, 1, 0);
			Player.addItemInventory(260, 24, 0);
		}

		//Fast Pickax
		    if(cmd=="fastmine"){
				clientMessage("§7Use \/fastmine on:off to enable or not fastmine.")
			}
			if(cmd=="fastmine on"){
			Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 9999*9999, 54, false, false);
			clientMessage("§bFastmine has been enabled!")
			}
			if(cmd=="fastmine off"){
				Entity.removeEffect(getPlayerEnt(), MobEffect.digSpeed);
				clientMessage("§bFastmine has been disabled!")
			}
		//FLY ON OFF
		   if (cmd =="fly"){
			   clientMessage("§7Use \/fly on:off to enable flying or not.");
		   }
		   if(cmd=="fly on"){
			   Player.setCanFly(1);
			   clientMessage("§bYou are now able to fly!");
		   }
		   if (cmd=="fly off"){
		   	if(Player.isFlying()){
		   	   Player.setFlying(0);
			   Player.setCanFly(0);
			   clientMessage("§bYou are no longer able to fly!");
			  		}
				else{
					Player.setCanFly(0);
				  clientMessage("§bYou are no longer able to fly!");
						}
		   }
		   //CREDITS
		   if(cmd=="credits"){
			   clientMessage("§7Made by: MaxTheGamer.\n§7Help of: VCraft and Quantum. \n§7Report bugs: @tgct99.\n§7Version: 1.0 BETA.")
		   }
		   //TIME
		   if(cmd=="time"){
			   clientMessage("§7Usage: \/time day:night:morning:evening");
		   }
		   if(cmd=="time day"){
			   Level.setTime(1000);
			   clientMessage("§bTime set to day.")
		   }
		   if(cmd=="time night"){
			   Level.setTime(13000);
			   clientMessage("§bTime set to night.");
		   }
		   if(cmd=="time morning"){
			   Level.setTime(0);
			   clientMessage("§bTime set to morning.");
		   }
		   if(cmd=="time evening"){
			   Level.setTime(11300);
			   clientMessage("§bTime set to evening.");
		   }
		   //COORDS
      if(cmd=="coords"){
				clientMessage("§bYour current co-ordinates are X:" + Math.floor(getPlayerX()) + " Y: " + Math.floor(getPlayerY()) + " Z: " + Math.floor(getPlayerZ()) + " .");
			}
			if(cmd=="place"){
				clientMessage("§aUse this command to place awesome and useful items in your world.\n§aA list of supported items can be found when doing \/place list.\n§aHave fun!");
			}
      if(cmd=="place list"){
				clientMessage("§fPlace list page 1 out of 1.\n \/place cobtrap -> Trap made of cobweb.\n \/place diamondblocks -> Place 13 diamond blocks. \n  \/place cobblegen -> Place cobblestone generator.\n \/place netherportal -> Place a nether portal and get flint and steel!");
			}
			//place Cobweb Trap
			if(cmd=="place cobtrap"){
			Level.setTile(getPlayerX()+1, getPlayerY(), getPlayerZ(), 30);  Level.setTile(getPlayerX()+2, getPlayerY(), getPlayerZ()+1, 30);
			Level.setTile(getPlayerX()+2, getPlayerY(), getPlayerZ(), 30);  Level.setTile(getPlayerX()+1, getPlayerY()+1, getPlayerZ(), 30);
			Level.setTile(getPlayerX()+2, getPlayerY()+1, getPlayerZ(), 30);Level.setTile(getPlayerX()+1, getPlayerY(), getPlayerZ()+1, 30);
			Level.setTile(getPlayerX()+1, getPlayerY()+1, getPlayerZ()+1, 30);Level.setTile(getPlayerX()+2, getPlayerY()+1, getPlayerZ()+1, 30);
			clientMessage("§bCobtrap placed.")
		}
		if (cmd == "place diamondblocks"){
			Level.setTile(getPlayerX()-1, getPlayerY()+1, getPlayerZ()+2, 57);        Level.setTile(getPlayerX()-1, getPlayerY()-1, getPlayerZ()+4, 57);
			Level.setTile(getPlayerX()-1, getPlayerY(), getPlayerZ()+2, 57);          Level.setTile(getPlayerX()-1, getPlayerY(), getPlayerZ()+4, 57);
			Level.setTile(getPlayerX()-1, getPlayerY()-1, getPlayerZ()+2, 57);        Level.setTile(getPlayerX()-1, getPlayerY()+1, getPlayerZ()+4, 57);

			Level.setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()+3, 57);          Level.setTile(getPlayerX(), getPlayerY()+3, getPlayerZ()+3, 11);

			Level.setTile(getPlayerX()+1, getPlayerY()-1, getPlayerZ()+2, 57);        Level.setTile(getPlayerX()+1, getPlayerY()-1, getPlayerZ()+4, 57);
			Level.setTile(getPlayerX()+1, getPlayerY(), getPlayerZ()+2, 57);          Level.setTile(getPlayerX()+1, getPlayerY(), getPlayerZ()+4, 57);
			Level.setTile(getPlayerX()+1, getPlayerY()+1, getPlayerZ()+2, 57);        Level.setTile(getPlayerX()+1, getPlayerY()+1, getPlayerZ()+4, 57);
			clientMessage("§bDiamond Blocks placed.");

		}
		if (cmd =="place cobblegen"){
			Level.setTile(getPlayerX()-1, getPlayerY()-1, getPlayerZ()+1, 98); Level.setTile(getPlayerX(), getPlayerY()-1, getPlayerZ()+1, 98);   Level.setTile(getPlayerX()+1, getPlayerY()-1, getPlayerZ()+1, 98); Level.setTile(getPlayerX()+2, getPlayerY()-1, getPlayerZ()+1, 98);
			Level.setTile(getPlayerX()-2, getPlayerY()-1, getPlayerZ()+2, 98); Level.setTile(getPlayerX()+3, getPlayerY()-1, getPlayerZ()+2, 98);
			Level.setTile(getPlayerX()-1, getPlayerY()-1, getPlayerZ()+2, 10); Level.setTile(getPlayerX()+1, getPlayerY()-2, getPlayerZ()+2, 0);  Level.setTile(getPlayerX()+2, getPlayerY()-1, getPlayerZ()+2, 8);
			Level.setTile(getPlayerX()-1, getPlayerY()-1, getPlayerZ()+3, 98); Level.setTile(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, 98);   Level.setTile(getPlayerX()+1, getPlayerY()-1, getPlayerZ()+3, 98); Level.setTile(getPlayerX()+2, getPlayerY()-1, getPlayerZ()+3, 98);
			clientMessage("§bCobblestone generator placed.");
		}
		if(cmd=="place netherportal"){
			Level.setTile(getPlayerX()-1, getPlayerY()+3, getPlayerZ()+1, 49); Level.setTile(getPlayerX(), getPlayerY()+3, getPlayerZ()+1, 49);
			Level.setTile(getPlayerX()-2, getPlayerY()+2, getPlayerZ()+1, 49); Level.setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1, 49);
			Level.setTile(getPlayerX()-2, getPlayerY()+1, getPlayerZ()+1, 49); Level.setTile(getPlayerX()+1, getPlayerY()+1, getPlayerZ()+1, 49);
			Level.setTile(getPlayerX()-2, getPlayerY(), getPlayerZ()+1, 49 );  Level.setTile(getPlayerX()+1, getPlayerY(), getPlayerZ()+1, 49);
			Level.setTile(getPlayerX()-1, getPlayerY()-1, getPlayerZ()+1, 49); Level.setTile(getPlayerX(), getPlayerY()-1, getPlayerZ()+1, 49);
			Player.addItemInventory(259, 1, 0);
			clientMessage("§bNether portal placed. Light it with the flint and steel.");
		}

		if(cmd=="superattack"){
			clientMessage("§7Usage: \/superattack on:off");
		}
		if(cmd=="superattack on"){
			sa = true;
			if(sa==true){
			function attackHook(attacker, victim){
					Entity.setFireTicks(victim, 10);
				}
			}
			clientMessage("§bSuper Attack has been enabled.")
		}
		else if (cmd == "superattack off"){
			sa = false;
			if(sa==true){
				function attackHook(attacker, victim){
					Entity.setFireTicks(victim, 20);
				}
			}
			clientMessage("§bSuper Attack has been disabled.")
		}
		if(cmd == "gamespeed"){
			clientMessage("§7Usage: /gamespeed slow:normal:fast:wow");
		}
		else if(cmd=="gamespeed slow"){
			ModPE.setGameSpeed(2);
			clientMessage("§bThe game is now slower than ever!");
		}
		else if (cmd=="gamespeed normal"){
			ModPE.setGameSpeed(20);
			clientMessage("§bThe game is back to normal.");
		}
		else if (cmd=="gamespeed fast"){
			ModPE.setGameSpeed(50);
			clientMessage("§bThe game is now faster than ever!");
		}
		else if (cmd=="gamespeed wow"){
			ModPE.setGameSpeed(130);
			clientMessage("§b§oIs this supposed to happen?!");
		}
		if(cmd=="setfov"){
			clientMessage("§7Usage: \/setfov small:normal:medium:large:extralarge");

		}
			else if(cmd=="setfov small"){
			ModPE.setFov(10);
			clientMessage("§bYour field of view has been changed to: small.");
			}
			else if(cmd=="setfov normal"){
			ModPE.setFov(70);
			clientMessage("§bYour field of view has been changed to: normal.");
			}
			else if(cmd=="setfov medium"){
			ModPE.setFov(100);
			clientMessage("§bYour field of view has been changed to: medium.");
			}
			else if(cmd=="setfov large"){
			ModPE.setFov(120);
			clientMessage("§bYour field of view has been changed to: large.");
			}
			else if(cmd=="setfov extralarge"){
			ModPE.setFov(150);
			clientMessage("§bYour field of view has been set to: extra large.");
			}
		if(cmd=="setspawn"){
			Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
			var spawnX = Player.getX();
			var spawnY = Player.getY();
			var spawnZ = Player.getZ();
			clientMessage("§aYour spawn has been set to: " + spawnX + " " + spawnY + " " + spawnZ);
		}
		if(cmd=="spawn"){
			clientMessage("§7USage: tp:coords.");
			ModPE.showTipMessage("§e\/spawn tp or \/spawn coords");
		}
			else if(cmd=="spawn tp"){
				if(spawnX == null|| spawnY == null ||spawnZ == null){
					clientMessage("§cCould not teleport to spawn: spawn not set.");
					ModPE.showTipMessage("§cError!");
				}
				else if(spawnX == NaN || spawnY == NaN || spawnZ == NaN){
					clientMessage("§cCould not teleport to spawn: invalid co-ordinates.");
					ModPE.showTipMessage("§cError.");
				}
				else{
				setPosition(Player.getEntity(), spawnX, spawnY, spawnZ);
				clientMessage("§aTeleported you to spawn.");
			}
			}
			else if(cmd=="spawn coords"){
					if(spawnX == null||spawnY == null ||spawnZ == null){
						clientMessage("§cCould not show the co-ordinates: spawn not defined.");
						ModPE.showTipMessage("§cError!");
					}
					else if(spawnX == NaN || spawnY==NaN||spawnZ==NaN){
						clientMessage("§cCould not show spawn location: invalid co-ordinates.");
						ModPE.showTipMessage("§cError!")
					}
					else {
				clientMessage("§aThe co-ordinates of the spawn location are X: " + spawnX + " Y: " + spawnY + " Z: " + spawnZ);
			}
		}
	 if(cmd=="removent"){
		 Entity.remove(50);
		 Entity.remove(51);
		 Entity.remove(52);
		 Entity.remove(53);
		 Entity.remove(54);
		 Entity.remove(55);
		 Entity.remove(56);
		 Entity.remove(57);
		 Entity.remove(58);
		 Entity.remove(59);
		 Entity.remove(60);
		 Entity.remove(61);
		 Entity.remove(62);
		 clientMessage("§bRemoved all mob entities successfully!");
		 ModPE.showTipMessage("§aSuccess!");
	 }
	 if(cmd=="healent"){
		 Entity.setHealth(50, 20);
		 Entity.setHealth(51, 20);
		 Entity.setHealth(52, 20);
		 Entity.setHealth(53, 20);
		 Entity.setHealth(54, 20);
		 Entity.setHealth(55, 20);
		 Entity.setHealth(56, 20);
		 Entity.setHealth(57, 20);
		 Entity.setHealth(58, 20);
		 Entity.setHealth(59, 20);
		 Entity.setHealth(60, 20);
		 Entity.setHealth(61, 20);
		 Entity.setHealth(62, 20);
		 clientMessage("§bAll entities have been healt successfully!");
		 ModPE.showTipMessage("§aSuccess!");
	 }
	 if(cmd=="invisible"){
		 Entity.remove(getPlayerEnt());
		 clientMessage("§bYou're now invisible!");
		 ModPE.showTipMessage("§aSuccess!");
	 }
	}
