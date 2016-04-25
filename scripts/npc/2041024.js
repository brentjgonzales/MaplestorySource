/*
        This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
Tombstone (2041024)
Location: Deep Inside the Clocktower (220080000)
By: xQuasar
Function: Trades Etc. drops for Pieces of Cracked Dimension
*/
var status;
function start() {
        status = -1;
        action(1,0,0);
}
function action(mode,type,selection) {
        if (mode == -1) {
                cm.dispose();
        } else if (status == -1) {
                status = 0;
                cm.sendSimple("Hello, I am a Tombstone. I can exchange parts for you. I can give you piece of a Dimensional Key, or if you have all three pieces I can create a full #z4031179#. So, what do you want?\r\n\r\n#b#L0#Obtain a #z4031176##l\r\n#L1#Obtain a #z4031177##l\r\n#L2#Obtain a #z4031178##l\r\n#L3#Obtain a complete #z4031179##l");
        } else if (status == 0) {
                if (selection == 0) {
                        if (cm.haveItem(4000147,50) && cm.haveItem(4000132,50)) { //50 sealed teddy bears and 50 ghost pirate keys
                                status = 1;
                                cm.sendYesNo("Hey, it looks like you have the items. So, are you sure you want to trade #r50 #z4000147##k and #r50 #z4000132##k for a #r#z4031176##k?");
                        } else {
                                cm.sendOk("If you give me some items, I will be able to give you a #r#z4031176##k. They can be found from the monsters around here.\r\nThe items are:\r\n\r\n#i4000147# x50\r\n#i4000132# x50");
                                cm.dispose();
                        }
                } else if (selection == 1) {
                        if (cm.haveItem(4000134,25) && cm.haveItem(4000149,25)) { //25 viking sails and 25 sealed bottles
                                status = 2;
                                cm.sendYesNo("Hey, it looks like you have the items. So, are you sure you want to trade #r25 #z4000134##k and #r25 #z4000149##k for a #r#z4031177##k?");
                        } else {
                                cm.sendOk("If you give me some items, I will be able to give you a #r#z4031177##k. They can be found from the monsters around here.\r\nThe items are:\r\n\r\n#i4000134# x25\r\n#i4000149# x25");
                                cm.dispose();
                        }
                } else if (selection == 2) {
                        if (cm.haveItem(4000152,5) && cm.haveItem(4000151,5)) { //5 thanatos straps and 5 gatekeeper armbands
                                status = 3;
                                cm.sendYesNo("Hey, it looks like you have the items. So, are you sure you want to trade #r5 #z4000152##k and #r5 #z4000151##k for a #r#z4031178##k?");
                        } else {
                                cm.sendOk("If you give me some items, I will be able to give you a #r#z4031178##k. They can be found from the monsters around here.\r\nThe items are:\r\n\r\n#i4000152# x5\r\n#i4000151# x5");
                                cm.dispose();
                        }
                } else if (selection == 3) {
                        if (cm.haveItem(4031176) && cm.haveItem(4031177) && cm.haveItem(4031178) && (cm.getMeso() >= 250000)) { //pieces of cracked dimension a,b & c
                                status = 4;
                                cm.sendYesNo("Hey, it looks like you have all 3 #rDimensional Pieces#k and #r250,000 mesos#k. So, would you like to forge #r#z4031176##k, #r#z4031177##k and #r#z4031178##k for a complete #r#z4031179##k?");
                        } else {
                                cm.sendOk("If you give me some items, I will be able to give you a #r#z4031179##k. You can exchange items from monsters for these ingredients.\r\nThe items are:\r\n\r\n#i4031176# x1\r\n#i4031177# x1\r\n#i4031178# x1\r\n\r\n#r250,000#k #fUI/UIWindow.img/QuestIcon/7/0#");
                                cm.dispose();
                        }
                } else {
                        cm.dispose();
                }
        } else if (status == 1) {
                if (mode == 1) {
                        cm.gainItem(4000147,-50);
                        cm.gainItem(4000132,-50);
                        cm.gainItem(4031176,1);
                        cm.sendOk("Thank you! If you need more, there is no limit to how many of these I can make. Just come to me!");
                        cm.dispose();
                } else {
                        cm.sendNext("I can make these items for you any time!");
                        cm.dispose();
                }
        } else if (status == 2) {
                if (mode == 1) {
                        cm.gainItem(4000134,-25);
                        cm.gainItem(4000149,-25);
                        cm.gainItem(4031177,1);
                        cm.sendOk("Thank you! If you need more, there is no limit to how many of these I can make. Just come to me!");
                        cm.dispose();
                } else {
                        cm.sendNext("I can make these items for you any time!");
                        cm.dispose();
                }
        } else if (status == 3) {
                if (mode == 1) {
                        cm.gainItem(4000152,-5);
                        cm.gainItem(4000151,-5);
                        cm.gainItem(4031178,1);
                        cm.sendOk("Thank you! If you need more, there is no limit to how many of these I can make. Just come to me!");
                        cm.dispose();
                } else {
                        cm.sendNext("I can make these items for you any time!");
                        cm.dispose();
                }
        } else if (status == 4) {
                if (mode == 1) {
                        cm.gainItem(4031176,-1);
                        cm.gainItem(4031177,-1);
                        cm.gainItem(4031178,-1);
                        cm.gainMeso(-250000);
                        cm.gainItem(4031179,1);
                        cm.sendOk("Thank you! If you need more, there is no limit to how many of these I can make. Just come to me!");
                        cm.dispose();
                } else {
                        cm.sendNext("I can make these items for you any time!");
                        cm.dispose();
                }
        } else {
                cm.dispose();
        }
}
